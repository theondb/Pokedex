function ajax(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){e(t)})}function populateContent(t){const e={id:t.id,name:t.name,base_experience:t.base_experience,height:t.height,weight:t.weight,type:t.types.map(t=>t.type.name).join(", "),abilities:t.abilities.map(t=>t.ability.name).join(", "),image:t.sprites.front_default,stat_name:t.stats.map(t=>t.stat.name),base_stat:t.stats.map(t=>t.base_stat),moves:t.moves.map(t=>t.move.name),move_url:t.moves.map(t=>t.move.url),move_level_learned:t.moves.map(t=>t.version_group_details[0].level_learned_at),move_learned_method:t.moves.map(t=>t.version_group_details[0].move_learn_method.name),game_featured:t.game_indices.map(t=>t.version.name).join(", ")};console.log(t);let n=e.name.charAt(0).toUpperCase()+e.name.slice(1);!function(t){const a=document.getElementById("pokemonDetails");let o=`\n\t\t\t<h1 class="pokemonHeader">${e.id}. ${n}</h1>\n\t\t\t<img class="pokeSprite" src="https://pokeres.bastionbot.org/images/pokemon/${t.id}.png" onError="this.onerror=null;this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t.id}.png';"/> \n\t\t\t<p>Height: ${e.height} dm</p>\n\t\t\t<p>Weight: ${e.weight} hg</p>\n\t\t\t<p>Base Experience: ${e.base_experience}</p>\n\t\t\t<ul>Type: ${e.type}</ul>\n\t\t\t<ul>Abilities: ${e.abilities}</ul>`;a.innerHTML=o}(e),function(t){const e=document.getElementById("stat-table");for(let n=0;n<t.stat_name.length;n++){let a=`\n\t\t\t<tr>\n\t\t\t\t<td>${t.stat_name[n]}</td>\n\t\t\t\t<td>${t.base_stat[n]}</td>\n\t\t\t</tr>`;e.innerHTML+=a}}(e),function(t){const e=document.getElementById("moves-table");for(let n=0;n<t.moves.length;n++){let a=`\n\t\t\t<tr>\n\t\t\t\t<td>${t.moves[n]}</td>\n\t\t\t\t<td>${t.move_level_learned[n]}</td>\n\t\t\t\t<td>${t.move_learned_method[n]}</td>\n\t\t\t</tr>`;e.innerHTML+=a}}(e),function(t){const n=document.getElementById("gameDetails");if(null!==`${e.game_featured}`&&""!==`${e.game_featured}`){let t=`\n\t\t\t<h2 class="pokemonHeader">Games Featured:</h2>\n\t\t\t<ul>${e.game_featured.toUpperCase()}</ul>`;n.innerHTML=t}else{let t='\n\t\t\t<h2 class="pokemonHeader">Games Featured:</h2>\n\t\t\t<ul>Not featured in a game yet.</ul>';n.innerHTML=t}console.log(`${e.game_featured}`)}()}function init(){const t=sessionStorage.getItem("url");console.log(t),ajax(t,populateContent)}init();