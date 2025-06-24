using System.ComponentModel.DataAnnotations;
using ProtoBuf;

namespace ProtoBuffer_Testing.Controllers
{
    [ProtoContract]
    public class userData
    {
        [ProtoMember(1)]
        public int Id { get; set; }

        [ProtoMember(2)]
        public string Name { get; set; }

        [ProtoMember(3)]
        public string Email { get; set; }
        [ProtoMember(3)]
        public string Password { get; set; }

        [ProtoMember(4)]
        public string Phone { get; set; }
    }
    [ProtoContract]
    public class UserList
    {
        [ProtoMember(1)]
        public List<userData> Users { get; set; }
    }
    [ProtoContract]
    public class userDataReq 
    {

        [ProtoMember(1)]
        public string Name { get; set; }

        [ProtoMember(2)]
        public string Email { get; set; }
        [ProtoMember(3)]
        public string Password { get; set; }

        [ProtoMember(4)]
        public string Phone { get; set; }
    }
}
