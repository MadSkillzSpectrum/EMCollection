using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using EMCollection.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace EMCollection.Controllers
{
    [EnableCors("AllowAngularLocalHost")]
    public class HomeController : Controller
    {
        private DbEntitiesContext _context;

        public HomeController(DbEntitiesContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/getMusicians")]
        public string GetMusicians()
        {
            return JsonConvert.SerializeObject(_context.Musicians.Include(a => a.Albums).ThenInclude(b => b.Tracks).ToList(), new JsonSerializerSettings()
            {
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            });
        }

        [HttpGet]
        [Route("api/getTracks")]
        public string GetTracks()
        {
            return JsonConvert.SerializeObject(_context.Tracks.Include(a => a.Album).ToList(), new JsonSerializerSettings()
            {
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            });
        }

        [HttpPost("{id}")]
        [Route("api/like")]
        public string Like(int id, int like)
        {
            var track = _context.Tracks.FirstOrDefault(a => a.Id == id);
            track.Rating = Math.Sign(like); //rating is number in json file so decided to use 1 and -1 as like an dislike (possible sum featere)
            _context.SaveChanges();
            return JsonConvert.SerializeObject(1);
        }


        [HttpPost("{id}")]
        [Route("api/favorite")]
        public string Favorite(int id)
        {
            var track = _context.Tracks.FirstOrDefault(a => a.Id == id);
            track.IsFavorite = !track.IsFavorite;
            _context.SaveChanges();
            return JsonConvert.SerializeObject(1);
        }

        [HttpPost("{id}")]
        [Route("api/listen")]
        public string Listen(int id)
        {
            var track = _context.Tracks.FirstOrDefault(a => a.Id == id);
            track.IsListened = !track.IsListened;
            _context.SaveChanges();
            return JsonConvert.SerializeObject(1);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
