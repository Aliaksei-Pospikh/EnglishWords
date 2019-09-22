var demo = new Vue({
    el: '#words',
    isHidden: false,
    data: {
        myWords:[
	{
	word: 'according to (eˈkodiŋ tu) - в соответствии с',
        image: 'memo-images/according.jpg',
        },
	{
	word: 'accurate (ˈækjurit) - точный',
	image: 'memo-images/accurate.jpg',
	},
	{
	word: 'accurately (ekjuritli) - точно',
	image: 'memo-images/accurately.jpg',
	},
	{
	word: 'acquire (eˈkwaie) - приобретать',
	image: 'memo-images/acquire.jpg',
	},
	{
	word: 'acquisition (ekwizishn) - приобретение',
	image: 'memo-images/acquisition.jpg',
	},
	{
	word: 'ancient (ˈeinshent) - древний',
	image: 'memo-images/ancient.jpg',
	},
	{
	word: 'area (ˈæ:rie) - площадь, зона, область',
	image: 'memo-images/area.jpg',
	},
	{
	word: 'arithmetic (eˈrismetik) - арифметика, арифметический',
	image: 'memo-images/arithmetic.jpg',
	},
	{
	word: 'around (ˈæˈraund) - вокруг, около',
	image: 'memo-images/around.jpg',
	},
	{
	word: 'art (ɑːt) - искусство; изобразительное искусство',
	image: 'memo-images/art.jpg',
	},
	{
	word: 'abolish (ˈæbalish) - отменять',
	image: 'memo-images/abolish.jpg',
	},
	{
	word: 'addiction (ˈædikshn) - зависимость',
	image: 'memo-images/addiction.jpg',
	},
	{
	word: 'agriculture (ˈægrikalche) - сельское хозяйство',
	image: 'memo-images/agriculture.jpg',
	},
	{
	word: 'amateur (ˈæmate) - любитель',
	image: 'memo-images/amateur.jpg',
	},
	{
	word: 'ambassador (ˈæmbaˈsade) - посол',
	image: 'memo-images/ambassador.jpg',
	},
	{
	word: 'ambulance (embulans) - скорая помощь',
	image: 'memo-images/ambulance.jpg',
	},
	{
	word: 'anger (enge) - гнев, злость',
	image: 'memo-images/anger.jpg',
	},
	{
	word: 'aprove (apruuv) - одобрять',
	image: 'memo-images/aprove.jpg',
	},
	{
	word: 'apron (eipron) - фартук',
	image: 'memo-images/apron.jpg',
	},
	{
	word: 'arrange (a:reindg) - организовывать',
	image: 'memo-images/arrange.jpg',
	},
	{
	word: 'arrogant (erogent) - высокомерный',
	image: 'memo-images/arrogant.jpg',
	},
	{
	word: 'boast (boust) - хвастаться',
	image: 'memo-images/boast.jpg',
	},
	{
	word: 'bodyguard (badigaad) - телохранитель',
	image: 'memo-images/bodyguard.jpg',
	},
	{
	word: 'canteen (kæntiin) - столовая',
	image: 'memo-images/canteen.jpg',
	},
	{
	word: 'celebrity (silebriti) - знаменитость',
	image: 'memo-images/celebrity.jpg',
	},
	{
	word: 'childhood (chaildhud) - детство',
	image: 'memo-images/childhood.jpg',
	},
	{
	word: 'civilian (siviljæn) - штатский',
	image: 'memo-images/civilian.jpg',
	},
	{
	word: 'collapse (kelæps) - разрушаться',
	image: 'memo-images/collapse.jpg',
	},
	{
	word: 'commercial (keme:shel) - рекламный ролик',
	image: 'memo-images/commercial.jpg',
	},
	{
	word: 'commission (kemishen) - комиссия',
	image: 'memo-images/commission.jpg',
	},
	{
	word: 'confidence (kaˈnfidents) - уверенность',
	image: 'memo-images/confidence.jpg',
	},
	{
	word: 'contemptuous (kentemptjues) - презрительный',
	image: 'memo-images/contemptuous.jpg',
	},
	{
	word: 'contribute (kentribju:t) - делать пожертвования',
	image: 'memo-images/contribute.jpg',
	},
	{
	word: 'convenient (kenvi:nient) - удобный',
	image: 'memo-images/convenient.jpg',
	},
	{
	word: 'correspondence (korisˈpondens) - переписка',
	image: 'memo-images/correspondence.jpg',
	},
	{
	word: 'courage (kaˈridg) - смелость',
	image: 'memo-images/courage.jpg',
	},
	{
	word: 'craving (kreivin) - страстное желание',
	image: 'memo-images/craving.jpg',
	},
	{
	word: 'crawl (krool) - ползать',
	image: 'memo-images/crawl.jpg',
	},
	{
	word: 'creative (kriˈetiv) - творческий',
	image: 'memo-images/creative.jpg',
	},
	{
	word: 'dedication (didiˈkeishn) - верность',
	image: 'memo-images/dedication.jpg',
	},
	{
	word: 'deliver (diˈlivæ) - доставлять',
	image: 'memo-images/deliver.jpg',
	},
	{
	word: 'depth (deps) - глубина',
	image: 'memo-images/depth.jpg',
	},
	{
	word: 'discend (diˈsend) - спускаться',
	image: 'memo-images/discend.jpg',
	},
	{
	word: 'destination (destiˈneishn) - назначение',
	image: 'memo-images/destination.jpg',
	},
	{
	word: 'deteriorate (diˈtieriereit) - ухудшать',
	image: 'memo-images/deteriorate.jpg',
	},
	{
	word: 'disappointment (diseˈpointment) - разочарование',
	image: 'memo-images/disappointment.jpg',
	},
	{
	word: 'dismiss (diˈsmis) - отпускать',
	image: 'memo-images/dismiss.jpg',
	},
	{
	word: 'dissolve (diˈzolv) - разрушать, растворять',
	image: 'memo-images/dissolve.jpg',
	},
	{
	word: 'distribute (diˈstribju:t) - распространять',
	image: 'memo-images/distribute.jpg',
	},
	{
	word: 'district (ˈdistrikt) - район',
	image: 'memo-images/district.jpg',
	},
	{
	word: 'elaborate (iˈlaberet) - разрабатывать',
	image: 'memo-images/elaborate.jpg',
	},
	{
	word: 'eligible (ˈilidgebl) - имеющий право',
	image: 'memo-images/eligible.jpg',
	},
	{
	word: 'embarrassment (imˈberesment) - затруднение',
	image: 'memo-images/embarrassment.jpg',
	},
	{
	word: 'emergency (iˈme:dgentsi) - критическое положение',
	image: 'memo-images/emergency.jpg',
	},
	{
	word: 'entourage (ontuˈra:ge) - окружение',
	image: 'memo-images/entourage.jpg',
	},
	{
	word: 'evidence (ˈevidents) - доказательство',
	image: 'memo-images/evidence.jpg',
	},
	{
	word: 'extinction (iksˈtinkshn) - вымирание',
	image: 'memo-images/extinction.jpg',
	},
	{
	word: 'famine (ˈfemin) - голод',
	image: 'memo-images/famine.jpg',
	},
	{
	word: 'flood (flad) - потоп',
	image: 'memo-images/flood.jpg',
	},
	{
	word: 'generosity (dgeneˈrositi) - щедрость',
	image: 'memo-images/generosity.jpg',
	},
	{
	word: 'gluttony (ˈglatni) - обжорство',
	image: 'memo-images/gluttony.jpg',
	},
	{
	word: 'hiccup (ˈhikap) - икота',
	image: 'memo-images/hiccup.jpg',
	},
	{
	word: 'honesty (ˈanesti) - честность',
	image: 'memo-images/honesty.jpg',
	},
	{
	word: 'household (ˈhaushould) - быт',
	image: 'memo-images/household.jpg',
	},
	{
	word: 'humanity (hju:ˈmeniti) - человечество',
	image: 'memo-images/humanity.jpg',
	},
	{
	word: 'humiliate (hju:ˈmileit) - унижать',
	image: 'memo-images/humiliate.jpg',
	},
	{
	word: 'interpret (inˈte:prit) - толковать',
	image: 'memo-images/interpret.jpg',
	},
	{
	word: 'investigate (inˈvestigeit) - исследовать',
	image: 'memo-images/investigate.jpg',
	},
	{
	word: 'justice (ˈdgastis) - справедливость',
	image: 'memo-images/justice.jpg',
	},
	{
	word: 'kindness (ˈkaindnes) - доброта',
	image: 'memo-images/kindness.jpg',
	}
	],
		WordsItem: ''
    },
  methods: {
  StartWords(){
	var i = 0;  // the index of the current item to show
            vm = this;
			setInterval(function() {            // setInterval makes it run repeatedly
				vm.WordsItem = vm.myWords[i++];             
			    if (i == vm.myWords.length) i = 0;   // reset to first element if you've finished to end
			}, 5000);  
		} 	
    }
})
