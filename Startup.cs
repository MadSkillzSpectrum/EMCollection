using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using EMCollection.Models;

namespace EMCollection
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DbEntitiesContext>(options =>
                options.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"));

            var serviceProvider = services.BuildServiceProvider();

            var context = serviceProvider.GetService<DbEntitiesContext>();

            //clear db on startup
            if (context.Tracks.Any())
                context.Tracks.Clear();
            if (context.Albums.Any())
                context.Albums.Clear();
            if (context.Musicians.Any())
                context.Musicians.Clear();
            context.SaveChanges();


            RootObject r = JsonConvert.DeserializeObject<RootObject>(System.IO.File.ReadAllText(@"data sample.json"));
            foreach (var a in r.Musicians)
            {
                a.Id = 0;
                a.Albums.ForEach(b => {
                    b.Id = 0;
                    b.Tracks.ForEach(c=>c.Id=0);
                    });


                context.Add(a);
            }
            context.SaveChanges();

            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // добавляем сборку через webpack
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            app.UseMvcWithDefaultRoute();

            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
