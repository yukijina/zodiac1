var zodiacs = [
  {
    name: 'Aries (March 21 - April 19)',
    image:'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/aries-dates.gif',
    description: 'Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.',
  },
  {
    name: 'Taurus (April 20 - May 20)',
    image:'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/taurus-dates.gif',
    description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors.',
  },
  {
    name: 'Gemini (May 21 - June 20)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/gemini-dates.gif',
    description: 'Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.',
  },
  {
    name: 'Cancer (June 21 - July 22)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/cancer-dates.gif',
    description: 'Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore, representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive, and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies of a room.',
  },
  {
    name: 'Leo (July 23 - August 22)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/leo-dates.gif',
    description: 'Roll out the red carpet, because Leo has arrived. Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.',
  },
  {
    name: 'Virgo (August 23 - September 22)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/virgo-dates.gif',
    description: 'Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.',
  },
  {
    name: 'Libra (September 23 - October 22)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/libra-dates.gif',
    description: 'Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra\'s fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.',
  },
  {
    name: 'Scorpio (October 23 - November 21)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/scorpio-dates-1.gif',
    description: 'Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.',
  },
  {
    name: 'Sagittarius (November 22 - December 21)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/sagittarius-dates.gif',
    description: 'Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.',
  },
  {
    name: 'Capricorn (December 22 - January 19)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/capricorn-dates.gif',
    description: 'The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.',
  },
  {
    name:'Aquarius (January 20 - February 18)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/aquarius-dates.gif',
    description:'Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.',
  },
  {
    name: 'Pisces (February 19 - March 20)',
    image: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/aquarius-dates.gif',
    description: 'Pisces, a water sign, is the last constellation of the zodiac. It\'s symbolized by two fish swimming in opposite directions, representing the constant division of Pisces\'s attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.'
  },
]

var selection = document.getElementById('selection')

for (var i = 0; i < zodiacs.length; i++) {
  var opt = document.createElement('option')
  opt.value = zodiacs[i].name
  opt.innerText = zodiacs[i].name
  selection.appendChild(opt)
}

selection.addEventListener('change', function() {
  console.log('running!')
  var myDiv = document.getElementsByClassName('display')[0]
  var title = document.createElement('h3')
  var myDesc = document.createElement('p')
  var myImg = document.createElement('img')

  myImg.className = 'img-fluid'

  //clear pervious contents when you click again
  myDiv.innerHTML = ''
  //clear previous animation class so that animation works again when you click next time
  var animation = function() {
    myDiv.className = 'display'
  }

  for (var i = 0; i < zodiacs.length; i++) {
    if(selection.value == zodiacs[i].name) {
      title.innerText = zodiacs[i].name
      myImg.src = zodiacs[i].image
      myDesc.innerText = zodiacs[i].description

      myImg.alt = zodiacs[i].name


      myDiv.appendChild(title)
      myDiv.appendChild(myDesc)
      myDiv.appendChild(myImg)

      myDiv.className = 'display animated fadeInUp'

      setTimeout(animation, 1000)
    }
  }
})
