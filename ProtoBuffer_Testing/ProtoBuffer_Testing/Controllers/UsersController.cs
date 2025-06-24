using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProtoBuf;
using ProtoBuffer_Testing.Modals;

namespace ProtoBuffer_Testing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ProtoDbContext _context;

        public UsersController(ProtoDbContext context)
        {
            _context = context;
        }



        [HttpPost("add")]
        [Consumes("application/octet-stream")]
        public async Task<IActionResult> CreateNewUser()
        {
            try
            {
                using var stream = new MemoryStream();
                await Request.Body.CopyToAsync(stream);
                stream.Position = 0;
                var user = UserRequestProto.Parser.ParseFrom(stream);

                var userMapping = new userData
                {
                    Name = user.Name,
                    Email = user.Email,
                    Password = user.Password,
                    Phone = user.Phone,
                };

                await _context.Users.AddAsync(userMapping);
                await _context.SaveChangesAsync();

                return Ok(user);
            }
            catch (DbUpdateException ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet]
        [Produces("application/octet-stream")]
        public async Task<IActionResult> GetUsersAsBinary()
        {
            var users = await _context.Users.ToListAsync();

             var stream = new MemoryStream();
            foreach (var user in users)
            {
                var proto = new UserRequestProto
                {
                    Name = user.Name,
                    Email = user.Email,
                    Password = user.Password,
                    Phone = user.Phone
                };
                proto.WriteDelimitedTo(stream); 
            }
            stream.Position = 0;
            return File(stream, "application/octet-stream");
        }

    }


}
