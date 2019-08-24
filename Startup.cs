using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ILoveMyHome
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSpaStaticFiles(cfg => { cfg.RootPath = "ClientApp/dist"; });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes => { routes.MapRoute("default", "{controller}/{id?}"); });
            
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                
                if(env.IsDevelopment())
                    spa.UseAngularCliServer("start");
            });
        }
    }
}