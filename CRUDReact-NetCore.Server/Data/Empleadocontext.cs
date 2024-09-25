using CRUDReact_NetCore.Server.Models;
using Microsoft.EntityFrameworkCore;


namespace CRUDReact_NetCore.Server.Data
{
    public class Empleadocontext : DbContext
    {
      public Empleadocontext( DbContextOptions<Empleadocontext> options):base(options) { }

        public DbSet<Empleado>Ttbempleados { get; set; }

    }

}



