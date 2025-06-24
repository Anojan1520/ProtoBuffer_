import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as protobuf from 'protobufjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;

  // Your protobuf message type
  private UserDataProto = new protobuf.Type("UserRequestProto")
    .add(new protobuf.Field("Name", 1, "string"))
    .add(new protobuf.Field("Email", 2, "string"))
    .add(new protobuf.Field("Password", 3, "string"))
    .add(new protobuf.Field("Phone", 4, "string"));

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
    });
  }
  
  onSubmit() {
    if (this.userForm.invalid) {
      console.warn("Form is invalid");
      return;
    }

    const payload = {
      Name: this.userForm.value.name,
      Email: this.userForm.value.email,
      Password: this.userForm.value.password,
      Phone: this.userForm.value.phone,
    };

    const errMsg = this.UserDataProto.verify(payload);
    if (errMsg) {
      console.error("Invalid payload:", errMsg);
      return;
    }

    const message = this.UserDataProto.create(payload);
    const buffer = this.UserDataProto.encode(message).finish(); // Uint8Array
    const blob = new Blob([buffer], { type: 'application/octet-stream' });

    
    this.http.post('http://localhost:5242/api/Users/add/', blob, {
      headers: { 'Content-Type': 'application/octet-stream' },
      responseType: 'json'
    }).subscribe({
      next: res => console.log('Server response:', res),
      error: err => console.error('Error:', err)
    });
    
  }

  // New method to fetch and decode multiple protobuf messages from backend binary stream
  fetchUsers() {
    this.http.get('http://localhost:5242/api/Users/', { responseType: 'arraybuffer' }).subscribe(buffer => {
      const users = this.decodeLengthDelimitedMessages(new Uint8Array(buffer));
      console.log('Decoded users: ', users);
    });
  }
  private decodeLengthDelimitedMessages(bytes: Uint8Array): any[] {
    const reader = protobuf.Reader.create(bytes);
    const users = [];
    while (reader.pos < reader.len) {
      try {
        const user = this.UserDataProto.decodeDelimited(reader);
        users.push(user);
      } catch (e) {
        console.error('Error decoding user protobuf:', e);
        break;
      }
    }
  
    return users;
  }

}
