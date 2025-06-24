
using Microsoft.EntityFrameworkCore;
using ProtoBuffer_Testing.Controllers;

namespace ProtoBuffer_Testing.Modals
{
    public class ProtoDbContext : DbContext
    {
        public ProtoDbContext(DbContextOptions<ProtoDbContext> options) : base(options)
        {

        }
        public DbSet<userData> Users { get; set; }
    }
}
