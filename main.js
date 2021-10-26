const imagemNoxus = `https://i.ytimg.com/vi/vLdiQg-W66c/maxresdefault.jpg`
const descriçãoNoxus = `oxus é um império poderoso com uma reputação temível. É visto como uma ameaça brutal e expansionista pelos estrangeiros, mas, por trás do exterior bélico, há uma sociedade surpreendentemente inclusiva que respeita e encoraja os talentos e as aptidões de cada indivíduo.

Os Noxii já foram uma tribo bárbara e violenta, até o momento em que invadiram a cidade antiga que, hoje em dia, fica no coração de seu domínio. Mesmo sob ameaças vindas de todos os lados, eles avançaram contra seus inimigos sem temor, expandindo o território ano a ano. A luta pela sobrevivência definiu o caráter dos noxianos modernos, um povo orgulhoso que valoriza a força acima de tudo — mas que sabe reconhecer que ela se manifesta de diversas formas.

Qualquer um pode conquistar uma posição de poder e respeito dentro de Noxus se demonstrar a aptidão necessária, independentemente de classe social, antecedentes ou riquezas. Os indivíduos que sabem usar magia são muito respeitados, e costumam ser recrutados para que seus talentos especiais sejam aprimorados e postos a serviço do império.

Entretanto, apesar dos ideais meritocráticos, as antigas famílias nobres ainda detêm grande poder... e há quem diga que a maior ameaça a Noxus não vem de fora, mas de dentro.`


const imagemTargon = `https://static.wikia.nocookie.net/coroa-das-entidades/images/7/78/Image.jpg/revision/latest/scale-to-width-down/694?cb=20190702202339&path-prefix=pt-br`
const descriçãoTargon = `Monte Targon é a mais imponente montanha de Runeterra; uma torre gigantesca de rochas endurecidas pelo sol em meio a uma variedade de cumes. Nada igual em escala em qualquer lugar do mundo. Localizado longe da civilização, o Monte Targon é deveras remoto e impossível de alcançar, exceto pelos exploradores mais determinados. Muitas lendas estão ligadas ao Monte Targon e, assim como qualquer lugar que pertence a um mito, é um farol para sonhadores, loucos e exploradores em busca de aventura. Algumas almas corajosas tentam escalar a montanha impossível, talvez em busca de conhecimento ou iluminação, ou talvez atrás de glória ou para atender outro desejo da alma ao ver seu auge. A subida é quase impossível, e até mesmo para aqueles poucos que, de alguma forma, sobrevivem a chegada ao topo jamais falam sobre o que viram lá. Alguns voltam com uma assombração de olhares vazios em seus olhos, outros mudam completamente, imbuídos de um Aspecto de poder sobrenatural e que vai além da humanidade, com um destino que poucos mortais podem compreender.`


const imagemDemacia = `https://cdn1.dotesports.com/wp-content/uploads/sites/3/2021/05/07161624/Screenshot-2021-04-30-122940-2048x1238-1-768x464.jpg`
const descriçãoDemacia = `m um reino imponente e legítimo com uma prestigiosa história militar, os habitantes de Demacia sempre colocaram os ideais de justiça, honra e dever acima de tudo, orgulhando-se intensamente de sua herança cultural. No entanto, apesar desses nobres princípios, essa grande nação autossuficiente foi se tornando cada vez mais fechada e isolacionista nos últimos séculos.

Hoje, Demacia é uma nação em crise.

Sua capital, a Grande Cidade de Demacia, nasceu como um refúgio contra a feitiçaria após as Guerras Rúnicas, construída sobre a enigmática petricita – uma pedra branca peculiar que anula qualquer energia mágica. É de lá que a família real, desde muito tempo atrás, defende as cidades e vilas mais afastadas, as fazendas, as florestas e as montanhas ricas em recursos minerais.

No entanto, após a morte súbita do rei Jarvan III, as outras famílias nobres ainda não aprovaram a sucessão de seu único herdeiro ao trono, o jovem príncipe Jarvan.

Aqueles que vivem para além das fronteiras fortemente protegidas são cada vez mais vistos com desconfiança e, em uma época de tantas incertezas, muitos antigos aliados começaram a procurar proteção em outros lugares. Dizem por aí que a era dourada de Demacia já passou e, a menos que seu povo esteja disposto a se adaptar a um mundo em constante mudança – o que muitos julgam impossível –, a queda do reino será inevitável.

Nem toda a petricita da região será capaz de proteger Demacia de si mesma.`


noxus = new lugar('Noxus', imagemNoxus,'N', descriçãoNoxus, '#8b0000')
targon = new lugar('Targon', imagemTargon,'O', descriçãoTargon, '#d1820c')
demacia = new lugar('Demacia', imagemDemacia,'E', descriçãoDemacia, '#0c55a8')

function lugar(nome,imagem,letraInicial,descrição, corBase){
  this.nome = nome
  this.imagem = imagem
  this.inicial = letraInicial
  this.descrição = descrição
  this.corBase = corBase
}

function configuraLugar(obj){
  titulo.innerText = obj.nome
  img.setAttribute('src',obj.imagem)
  descrição.innerText = obj.descrição
  letraInicial.innerText = obj.inicial
  document.body.style.background = obj.corBase
}

selecionar.onclick = function mostrarLugar(){
  let lugar = lugarSelecionado.value
  
  lugar == 1? configuraLugar(noxus):''
  lugar == 2? configuraLugar(targon):''
  lugar == 3? configuraLugar(demacia):''
}
