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
    public class Musician
    {
        [ScaffoldColumn(false)]
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("age")]
        public int Age { get; set; }
        [JsonProperty("careerStartYear")]
        public int CareerStartYear { get; set; }
        [JsonProperty("albums")]
        public virtual List<Album> Albums { get; set; }
    }
}
