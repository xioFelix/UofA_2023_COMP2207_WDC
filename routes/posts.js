var express = require('express');
var router = express.Router();
var qs = require('qs');
var posts = [{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242465804, content: "<p> "+
"My father's family name being Pirrip, and my Christian name Philip, my "+
"infant tongue could make of both names nothing longer or more explicit "+
"than Pip. So, I called myself Pip, and came to be called Pip. "+
"</p>"},
{ author:"Charles", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242465694, content: "<p> "+
"I give Pirrip as my father's family name, on the authority of his "+
"tombstone and my sister,&mdash;Mrs. Joe Gargery, who married the "+
"blacksmith. As I never saw my father or my mother, and never saw any "+
"likeness of either of them (for their days were long before the days of "+
"photographs), my first fancies regarding what they were like were "+
"unreasonably derived from their tombstones. The shape of the letters on my "+
"father's, gave me an odd idea that he was a square, stout, dark man, with "+
"curly black hair. From the character and turn of the inscription, &ldquo;<i>Also "+
"Georgiana Wife of the Above</i>,&rdquo; I drew a childish conclusion that my mother "+
"was freckled and sickly. To five little stone lozenges, each about a foot "+
"and a half long, which were arranged in a neat row beside their grave, and "+
"were sacred to the memory of five little brothers of mine,&mdash;who gave "+
"up trying to get a living, exceedingly early in that universal struggle,&mdash;I "+
"am indebted for a belief I religiously entertained that they had all been "+
"born on their backs with their hands in their trousers-pockets, and had "+
"never taken them out in this state of existence. "+
"</p>"},
{ author:"Charlie", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242466504, content: "<p> "+
"Ours was the marsh country, down by the river, within, as the river wound, "+
"twenty miles of the sea. My first most vivid and broad impression of the "+
"identity of things seems to me to have been gained on a memorable raw "+
"afternoon towards evening. At such a time I found out for certain that "+
"this bleak place overgrown with nettles was the churchyard; and that "+
"Philip Pirrip, late of this parish, and also Georgiana wife of the above, "+
"were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, "+
"and Roger, infant children of the aforesaid, were also dead and buried; "+
"and that the dark flat wilderness beyond the churchyard, intersected with "+
"dikes and mounds and gates, with scattered cattle feeding on it, was the "+
"marshes; and that the low leaden line beyond was the river; and that the "+
"distant savage lair from which the wind was rushing was the sea; and that "+
"the small bundle of shivers growing afraid of it all and beginning to cry, "+
"was Pip. "+
"</p>"},
{ author:"Dick", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242465300, content: "<p> "+
"&ldquo;Hold your noise!&rdquo; cried a terrible voice, as a man started up from among "+
"the graves at the side of the church porch. &ldquo;Keep still, you little devil, "+
"or I'll cut your throat!&rdquo; "+
"</p> "+
"<p> "+
"A fearful man, all in coarse gray, with a great iron on his leg. A man "+
"with no hat, and with broken shoes, and with an old rag tied round his "+
"head. A man who had been soaked in water, and smothered in mud, and lamed "+
"by stones, and cut by flints, and stung by nettles, and torn by briars; "+
"who limped, and shivered, and glared, and growled; and whose teeth "+
"chattered in his head as he seized me by the chin. "+
"</p>"},
{ author:"C. Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"&ldquo;Oh! Don't cut my throat, sir,&rdquo; I pleaded in terror. &ldquo;Pray don't do it, "+
"sir.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Tell us your name!&rdquo; said the man. &ldquo;Quick!&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Pip, sir.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Once more,&rdquo; said the man, staring at me. &ldquo;Give it mouth!&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Pip. Pip, sir.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Show us where you live,&rdquo; said the man. &ldquo;Pint out the place!&rdquo; "+
"</p> "+
"<p> "+
"I pointed to where our village lay, on the flat in-shore among the "+
"alder-trees and pollards, a mile or more from the church. "+
"</p>"},
{ author:"Charles D", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"The man, after looking at me for a moment, turned me upside down, and "+
"emptied my pockets. There was nothing in them but a piece of bread. When "+
"the church came to itself,&mdash;for he was so sudden and strong that he "+
"made it go head over heels before me, and I saw the steeple under my feet,&mdash;when "+
"the church came to itself, I say, I was seated on a high tombstone, "+
"trembling while he ate the bread ravenously. "+
"</p> "+
" "+
"<p> "+
"&ldquo;You young dog,&rdquo; said the man, licking his lips, &ldquo;what fat cheeks you ha' "+
"got.&rdquo; "+
"</p> "+
"<p> "+
"I believe they were fat, though I was at that time undersized for my "+
"years, and not strong. "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"&ldquo;Darn me if I couldn't eat em,&rdquo; said the man, with a threatening shake of "+
"his head, &ldquo;and if I han't half a mind to't!&rdquo; "+
"</p> "+
"<p> "+
"I earnestly expressed my hope that he wouldn't, and held tighter to the "+
"tombstone on which he had put me; partly, to keep myself upon it; partly, "+
"to keep myself from crying. "+
"</p> "+
"<p> "+
"&ldquo;Now lookee here!&rdquo; said the man. &ldquo;Where's your mother?&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;There, sir!&rdquo; said I. "+
"</p> "+
"<p> "+
"He started, made a short run, and stopped and looked over his shoulder. "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"&ldquo;There, sir!&rdquo; I timidly explained. &ldquo;Also Georgiana. That's my mother.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Oh!&rdquo; said he, coming back. &ldquo;And is that your father alonger your mother?&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Yes, sir,&rdquo; said I; &ldquo;him too; late of this parish.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Ha!&rdquo; he muttered then, considering. &ldquo;Who d'ye live with,&mdash;supposin' "+
"you're kindly let to live, which I han't made up my mind about?&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;My sister, sir,&mdash;Mrs. Joe Gargery,&mdash;wife of Joe Gargery, the "+
"blacksmith, sir.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Blacksmith, eh?&rdquo; said he. And looked down at his leg. "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"After darkly looking at his leg and me several times, he came closer to my "+
"tombstone, took me by both arms, and tilted me back as far as he could "+
"hold me; so that his eyes looked most powerfully down into mine, and mine "+
"looked most helplessly up into his. "+
"</p> "+
"<p> "+
"&ldquo;Now lookee here,&rdquo; he said, &ldquo;the question being whether you're to be let "+
"to live. You know what a file is?&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Yes, sir.&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;And you know what wittles is?&rdquo; "+
"</p> "+
"<p> "+
"&ldquo;Yes, sir.&rdquo; "+
"</p> "+
"<p> "+
"After each question he tilted me over a little more, so as to give me a "+
"greater sense of helplessness and danger. "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"&ldquo;You get me a file.&rdquo; He tilted me again. &ldquo;And you get me wittles.&rdquo; He "+
"tilted me again. &ldquo;You bring 'em both to me.&rdquo; He tilted me again. &ldquo;Or I'll "+
"have your heart and liver out.&rdquo; He tilted me again. "+
"</p> "+
"<p> "+
"I was dreadfully frightened, and so giddy that I clung to him with both "+
"hands, and said, &ldquo;If you would kindly please to let me keep upright, sir, "+
"perhaps I shouldn't be sick, and perhaps I could attend more.&rdquo; "+
"</p> "+
"<p> "+
"He gave me a most tremendous dip and roll, so that the church jumped over "+
"its own weathercock. Then, he held me by the arms, in an upright position "+
"on the top of the stone, and went on in these fearful terms:&mdash; "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"&ldquo;You bring me, to-morrow morning early, that file and them wittles. You "+
"bring the lot to me, at that old Battery over yonder. You do it, and you "+
"never dare to say a word or dare to make a sign concerning your having "+
"seen such a person as me, or any person sumever, and you shall be let to "+
"live. You fail, or you go from my words in any partickler, no matter how "+
"small it is, and your heart and your liver shall be tore out, roasted, and "+
"ate. Now, I ain't alone, as you may think I am. There's a young man hid "+
"with me, in comparison with which young man I am a Angel. That young man "+
"hears the words I speak. That young man has a secret way pecooliar to "+
"himself, of getting at a boy, and at his heart, and at his liver. It is in "+
"wain for a boy to attempt to hide himself from that young man. A boy may "+
"lock his door, may be warm in bed, may tuck himself up, may draw the "+
"clothes over his head, may think himself comfortable and safe, but that "+
"young man will softly creep and creep his way to him and tear him open. I "+
"am a keeping that young man from harming of you at the present moment, "+
"with great difficulty. I find it wery hard to hold that young man off of "+
"your inside. Now, what do you say?&rdquo; "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"I said that I would get him the file, and I would get him what broken bits "+
"of food I could, and I would come to him at the Battery, early in the "+
"morning. "+
"</p> "+
"<p> "+
"&ldquo;Say Lord strike you dead if you don't!&rdquo; said the man. "+
"</p> "+
"<p> "+
"I said so, and he took me down. "+
"</p> "+
"<p> "+
"&ldquo;Now,&rdquo; he pursued, &ldquo;you remember what you've undertook, and you remember "+
"that young man, and you get home!&rdquo; "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"&ldquo;Goo-good night, sir,&rdquo; I faltered. "+
"</p> "+
"<p> "+
"&ldquo;Much of that!&rdquo; said he, glancing about him over the cold wet flat. &ldquo;I "+
"wish I was a frog. Or a eel!&rdquo; "+
"</p> "+
"<p> "+
"At the same time, he hugged his shuddering body in both his arms,&mdash;clasping "+
"himself, as if to hold himself together,&mdash;and limped towards the low "+
"church wall. As I saw him go, picking his way among the nettles, and among "+
"the brambles that bound the green mounds, he looked in my young eyes as if "+
"he were eluding the hands of the dead people, stretching up cautiously out "+
"of their graves, to get a twist upon his ankle and pull him in. "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242365301, content: "<p> "+
"When he came to the low church wall, he got over it, like a man whose legs "+
"were numbed and stiff, and then turned round to look for me. When I saw "+
"him turning, I set my face towards home, and made the best use of my legs. "+
"But presently I looked over my shoulder, and saw him going on again "+
"towards the river, still hugging himself in both arms, and picking his way "+
"with his sore feet among the great stones dropped into the marshes here "+
"and there, for stepping-places when the rains were heavy or the tide was "+
"in. "+
"</p>"},
{ author:"Charles Dickens", authorWeb:"http://www.gutenberg.org/ebooks/author/37", time:-3242465301, content: "<p> "+
"The marshes were just a long black horizontal line then, as I stopped to "+
"look after him; and the river was just another horizontal line, not nearly "+
"so broad nor yet so black; and the sky was just a row of long angry red "+
"lines and dense black lines intermixed. On the edge of the river I could "+
"faintly make out the only two black things in all the prospect that seemed "+
"to be standing upright; one of these was the beacon by which the sailors "+
"steered,&mdash;like an unhooped cask upon a pole,&mdash;an ugly thing when "+
"you were near it; the other, a gibbet, with some chains hanging to it "+
"which had once held a pirate. The man was limping on towards this latter, "+
"as if he were the pirate come to life, and come down, and going back to "+
"hook himself up again. It gave me a terrible turn when I thought so; and "+
"as I saw the cattle lifting their heads to gaze after him, I wondered "+
"whether they thought so too. I looked all round for the horrible young "+
"man, and could see no signs of him. But now I was frightened again, and "+
"ran home without stopping. "+
"</p>"}];

router.get('/', function(req, res, next) {
    let num = req.query.num;
    let first = req.query.first;
    if ((typeof first === 'number' && first%1 === 0) || first < 0 || !first){
      first = 0;
    }
    if ((typeof num === 'number' && num%1 === 0) || num < 1 || !num){
      res.send(JSON.stringify(posts));
    }
    else{
      let end = parseInt(first) +parseInt(num);
      res.send(JSON.stringify(posts.slice(first,end)));
    }
});

module.exports = router;