using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace EMCollection.Models
{
    [JsonObject]
    public class Album
    {
        [ScaffoldColumn(false)]
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("releaseYear")]
        public int ReleaseYear { get; set; }
        [JsonProperty("tracks")]
        public virtual List<Track> Tracks { get; set; }
        [JsonProperty("musician")]
        public virtual Musician Author { get; set; } //сделать List для коллабов?
    }
}
