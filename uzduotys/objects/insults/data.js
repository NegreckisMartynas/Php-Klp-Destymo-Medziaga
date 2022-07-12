const data = [
	{
		"date" : "1\/1\/2012 12:29:41",
		"permalink" : "http:\/\/markmail.org\/message\/vdhbsasqzqnbx2od",
		"type" : "B",
		"excerpt" : "WRONG. Alan, you're not getting it. Loading firmware as part of suspend\/resume is WRONG."
	},
	{
		"date" : "1\/2\/2012 14:03:04",
		"permalink" : "http:\/\/markmail.org\/message\/wajnh3ivnydeegrr",
		"type" : "P",
		"excerpt" : "What the heck is your problem? Go back and read it. If it wasn't loaded before, THEN IT WASN'T WORKING BEFORE EITHER! ... Why the hell do you keep on harping on idiotic issues? Stop being a moron, just repeat after me: A caching firmware loader fixes all these issues and is simple to boot. Stop the idiotic blathering already."
	},
	{
		"date" : "1\/2\/2012 14:19:14",
		"permalink" : "http:\/\/markmail.org\/message\/6yuyz57cmrgo5fbe",
		"type" : "B",
		"excerpt" : "Why do you make up all these idiotic theoretical cases that nobody cares about and has no relevance what-so-ever for the 99%? Seriously? It's just stupid. ... You seem to *intentionally* be off in some random alternate reality that is not relevant to anybody else, or to the actual reported problems at hand."
	},
	{
		"date" : "1\/5\/2012 8:15:43",
		"permalink" : "http:\/\/markmail.org\/message\/67cwg72lysi7isn4",
		"type" : "C",
		"excerpt" : "Whjat the f*ck is the logic there? Just fix the *obvious* breakage in BLKROSET. It's clearly what the code *intends* to do, it just didn't check for ENOIOCTLCMD. ... It's a DISEASE how you seem to think that \"we have ugly mistakes in the kernel, SO LET'S ADD ANOTHER ONE\". That's not how we do things. We *fix* things, instead of making things even *worse*. Stop this insanity from spreading, instead of making it spread more!"
	},
	{
		"date" : "1\/5\/2012 9:04:08",
		"permalink" : "http:\/\/markmail.org\/message\/7mbldkqli45vetes",
		"type" : "B",
		"excerpt" : "You are the one who seems to just want to add hack upon hack to things. THAT is what I really hate. It's not only in bad taste, it *will* come back and bite us some day."
	},
	{
		"date" : "1\/6\/2012 14:12:58",
		"permalink" : "http:\/\/markmail.org\/message\/2xzd4gfthx7cx4qa",
		"type" : "B",
		"excerpt" : "Hell no! Why do you send me this sh*t? The \"Use NMI instead of REBOOT_VECTOR\" commit has been reported to not work AT ALL. It was totally broken... yet you send me this KNOWN BROKEN CRAP. And yes, I checked. The version you sent me is the f*cked one. I was hoping that you would have fixed it up. But no. In short, you didn't merge the fix, and yet you sent me a patch series that was *known* to be broken for the last three+ weeks! ... Why? WHAT THE F*CK HAPPENED, INGO? Yes, I'm angry as hell. Shit like this should NOT happen.  I don't want people sending me known-buggy pull requests."
	},
	{
		"date" : "1\/10\/2012 10:26:38",
		"permalink" : "http:\/\/markmail.org\/message\/zl7vtxfzr46qz7vj",
		"type" : "C",
		"excerpt" : "Mark, I pulled this, but I was *this* close to unpulling it because it's such an unholy mess. You seem to do the crazy \"daily pull\" crap that NOBODY IS EVER SUPPOSED TO DO. There are lots of totally pointless ... merge commits, and no, that's not ok.... Just don't do it. There's no excuse. The *only* time you should merge is when a sub lieutenant asks you to - and if you have people who work with you and ask you to do pointless merges almost every day, just tell them to shut the f*ck up already!...But dammit, don't then do development on top of that kind of crap - use that branch *only* for linux-next, not for anything else, and don't ask me to pull that polluted piece of sh*t. ...But never *ever* have those stupid pointless \"Merge remote-tracking branch 'regulator\/for-linus' into regulator-next\" in the branch you actually use for development, and the branch you send to me."
	},
	{
		"date" : "1\/10\/2012 10:36:36",
		"permalink" : "http:\/\/markmail.org\/message\/mm4j5aparrhrd2uj",
		"type" : "C",
		"excerpt" : "No it's not. Please fix your crappy script. First off, that '#' is wrong. It should be a space."
	},
	{
		"date" : "1\/10\/2012 11:18:21",
		"permalink" : "http:\/\/markmail.org\/message\/etgqfjizy2bnlueb",
		"type" : "B",
		"excerpt" : "...You did *two* of the merges within hours of each other! ... That's just crazy. The fact that you then say that you have some kind of *excuse* for that craziness is just sad. Stop doing that. It's stupid. It just makes it harder for everybody to see what you are doing. ...Can't you see how crazy that is?"
	},
	{
		"date" : "1\/11\/2012 22:41:13",
		"permalink" : "http:\/\/markmail.org\/message\/pfxugcxqxjfriph5",
		"type" : "P",
		"excerpt" : "Stop being a moron. Go back and read the \"nobody can work with you\"."
	},
	{
		"date" : "1\/14\/2012 18:18:39",
		"permalink" : "http:\/\/markmail.org\/message\/jbizb5ughu4fqxrb",
		"type" : "P",
		"excerpt" : "That statement is so nonsensical that I can't get past it. When you understand why it is nonsensical, you understand why the bit is cleared. Feel free to bring this up again without that idiotic statement as an argument."
	},
	{
		"date" : "1\/16\/2012 16:59:18",
		"permalink" : "http:\/\/markmail.org\/message\/qsuq427y6dwkf4hy",
		"type" : "B",
		"excerpt" : "So stop spouting garbage."
	},
	{
		"date" : "1\/18\/2012 11:47:31",
		"permalink" : "http:\/\/markmail.org\/message\/dq2ynrzxr7pmwats",
		"type" : "B",
		"excerpt" : ".. And how the f*^& did you imagine that something like chrome would do that? You need massive amounts of privileges, and it's a total disaster in every single respect. Stop pushing crap. No, ptrace isn't wonderful, but your LSM+auditing idea is a billion times worse in all respects. ... THERE IS NO WAY IN HELL YOU CAN EVER FIX LSM+AUDIT TO BE USABLE! Stop bothering to even bring it up. It's dead, Jim."
	},
	{
		"date" : "1\/23\/2012 8:05:49",
		"permalink" : "http:\/\/markmail.org\/message\/ch4twebkpi6b2mbl",
		"type" : "C",
		"excerpt" : "And this is just insanity. The \"barrier()\" cannot *possibly* do anything sane. If it really makes a difference, there is again some serious problem with the whole f*cking thing. NAK on the patch until sanity is restored. This is just total voodoo programming."
	},
	{
		"date" : "1\/23\/2012 10:45:12",
		"permalink" : "http:\/\/markmail.org\/message\/onbcv4qmrw4tbv5s",
		"type" : "C",
		"excerpt" : "This still doesn't make sense. Why do that stupid allocation? Why not just move the entry? Why doesn't just the sane approach work? What the f*^& does that pci_stop_bus_device() function do ...And if it does anything else, it should damn well stop doing that. The *exact* same loop is then apparently working for the virtual device case, so what the hell is going on that it wouldn't work for the physical one? What's the confusion? Why all the crazy idiotic code that makes no sense?"
	},
	{
		"date" : "1\/23\/2012 11:34:02",
		"permalink" : "http:\/\/markmail.org\/message\/uuekhii7gppgrchm",
		"type" : "C",
		"excerpt" : "...which at least isn't butt ugly. ... Who is in charge of the whole 'is_virtfn' mess? How realistic is it to fix that crud?"
	},
	{
		"date" : "1\/23\/2012 11:44:07",
		"permalink" : "http:\/\/markmail.org\/message\/do7uzydtoet263qb",
		"type" : "C",
		"excerpt" : "Ugh. Ok, so that's a disgusting hack, but it's better than messing up the generic PCI subsystem. At least it's a disgusting hack in the IOV code."
	},
	{
		"date" : "2\/1\/2012 15:14:51",
		"permalink" : "http:\/\/markmail.org\/message\/dxz4tb3kjl4bp6gv",
		"type" : "C",
		"excerpt" : "I think this patch is horrible, and broken. And making the feature a config option is just stupid."
	},
	{
		"date" : "2\/3\/2012 17:27:13",
		"permalink" : "http:\/\/markmail.org\/message\/ksmb5zyz2lqibbtz",
		"type" : "C",
		"excerpt" : "I hate this patch. Why? Because mindless checks like this would just lead to people making things worse and intermixing spaces there instead."
	},
	{
		"date" : "2\/10\/2012 10:59:28",
		"permalink" : "http:\/\/markmail.org\/message\/dbru76xfj6x3kwrw",
		"type" : "C",
		"excerpt" : "I never *ever* want to see this code ever again. Sorry, but last time was too f*cking painful. "
	},
	{
		"date" : "2\/19\/2012 10:45:03",
		"permalink" : "http:\/\/markmail.org\/message\/hajos5jgikouyqzz",
		"type" : "C",
		"excerpt" : "Duh. That is just broken. ... That's just stupid. "
	},
	{
		"date" : "2\/23\/2012 9:17:58",
		"permalink" : "http:\/\/markmail.org\/message\/jkqbwy67dldnsw64",
		"type" : "B",
		"excerpt" : "Ingo, stop with the stupid denialism. NOBODY likes that name. NOBODY. It's wrong. It's stupid. It sounds like a stronger \"unlikely()\", and it simply IS NOT. So rename it already. ..."
	},
	{
		"date" : "2\/27\/2012 8:23:29",
		"permalink" : "http:\/\/markmail.org\/message\/dr3rwlsdmbskwd25",
		"type" : "C",
		"excerpt" : "There's two of those *stupid* merges that have no reason for existing, no explanation, and are just ugly. Don't do this, guys! ... Christ. I really don't like stupid unnecessary merges. ... The above is really just a f*cking abomination, and says \"somebody is doing something horribly wrong\"."
	},
	{
		"date" : "2\/27\/2012 15:25:53",
		"permalink" : "http:\/\/markmail.org\/message\/5m6tpd4ndfhmgwmb",
		"type" : "P",
		"excerpt" : "Congratulations, you seem to have found a whole new and unique way of screwing up ;) Linus \"my mom called me 'special' too\" Torvalds"
	},
	{
		"date" : "2\/28\/2012 10:34:26",
		"permalink" : "http:\/\/markmail.org\/message\/elh6nu2xnuhnih4a",
		"type" : "C",
		"excerpt" : "Oh christ. This is exactly what the scheduler has ALWAYS ALREADY DONE FOR YOU. ... Stop doing it. You get *zero* advantages from just doing what the scheduler natively does for you, and the scheduler does it *better*."
	},
	{
		"date" : "3\/1\/2012 8:22:31",
		"permalink" : "http:\/\/markmail.org\/message\/jbumffinfr6z2fgw",
		"type" : "C",
		"excerpt" : "Ugh. But my patch was crap. It fixed up \"arg\", but it *should* have fixed up \"cmd\". Stupid."
	},
	{
		"date" : "3\/8\/2012 15:40:03",
		"permalink" : "http:\/\/markmail.org\/message\/d4dfw53uqwhdj24i",
		"type" : "B",
		"excerpt" : "Stop right there. ... This is about your patch BREAKING EXISTING BINARIES. So stop the f*&^ing around already. The patch was shown to be broken, stop making excuses, and stop blathering. End of story. Binary compatibility is more important than *any* of your patches. If you continue to argue anything else or making excuses, I'm going to ask people to just ignore your patches entirely. Seriously. ... Dammit, I'm continually surprised by the *idiots* out there that don't understand that binary compatibility is one of the absolute top priorities. ... Breaking existing binaries ... is just about the *worst* offense any kernel developer can do. Because that shows that they don't understand what the whole *point* of the kernel was after all. We're not masturbating around with some research project.  We never were. Even when Linux was young, the whole and only point was to make a *usable* system. It's why it's not some crazy drug-induced microkernel or other random crazy thing. Really."
	},
	{
		"date" : "3\/10\/2012 13:48:58",
		"permalink" : "http:\/\/markmail.org\/message\/rejdrjwxjpsjhcbz",
		"type" : "B",
		"excerpt" : "Christ. This one is too ugly to live. I'm not pulling crap like this. It's f*^&ing stupid to take a lock, calculate a bitqueue, and just generally be an absolute ass-hat about things for waiting for a bit that is already set 99.999% of the time."
	},
	{
		"date" : "3\/12\/2012 3:11:20",
		"permalink" : "http:\/\/markmail.org\/message\/ichcq6rwe6kd465y",
		"type" : "B",
		"excerpt" : "Umm. I think your argument is totally braindead and wrong. My counter-argument is very simple: \"So what?\""
	},
	{
		"date" : "3\/13\/2012 18:50:48",
		"permalink" : "http:\/\/markmail.org\/message\/g3trnj5a24qwudha",
		"type" : "B",
		"excerpt" : "Sorry, you're wrong. And Rafael *told* you why you are wrong, and you ignored him and talked about \"exec\" some more. So go back and read Rafael's email. ... So please, read the emails. People actually *agree* that the name may be a bit misleading, but instead of harping on bogus issues, just read the emails from people like Rafael about it. So STOP with this idiocy already. ... Seriously. Get that through your head already."
	},
	{
		"date" : "3\/13\/2012 19:20:48",
		"permalink" : "http:\/\/markmail.org\/message\/juyi2s4trzco2u4t",
		"type" : "C",
		"excerpt" : "So I have to say, I hate this entire series. ... So quite frankly, I think the whole series is total and utter garbage. And there isn't even any *explanation\" for the garbage. You say that you are unifying things, but dammit, in order to unify them you end up *adding*new*f&^#ing*code*. ... So a honking big NAK on this whole series unless you can explain with numbers and show with numbers what the advantage of the abortion is."
	},
	{
		"date" : "3\/16\/2012 16:37:20",
		"permalink" : "http:\/\/markmail.org\/message\/2akzikmz2ddlrpxw",
		"type" : "C",
		"excerpt" : "Ugh, this is disgusting."
	},
	{
		"date" : "3\/16\/2012 22:51:09",
		"permalink" : "http:\/\/markmail.org\/message\/awyyeypu2ephzrgw",
		"type" : "B",
		"excerpt" : "Stop these idiotic games already! ... Your moronic \"let's change the test to something else\" is entirely and utterly misguided and totally misses the point. ... Stop the idiocy already. How hard is it to understand? How many times do people have to tell you? ... Rafael, please consider everything along these *IDIOTIC* lines completely NAK'ed. In fact, until Stephen starts showing any sign of understanding that it's not about just some random small detail, just ignore anything and everything from him. Stephen, you've been told multiple times that that WARN_ON() is correct. Until you understand that, just stop sending these entirely random patches that change it to something completely wrong. How hard can it be to understand that you cannot and must not load firmware when the system isn't up-and-running. And *dammit*, the fact that you send these kinds of completely nonsensical patches ... all you are showing is that you don't understand the problem. Stop, think, and read the emails that have been in this thread and that have explained how it *could* be solved. Until you do that, any patch you send is just worthless. Really."
	},
	{
		"date" : "3\/21\/2012 10:12:41",
		"permalink" : "http:\/\/markmail.org\/message\/6frp6dt75hnwzdm3",
		"type" : "C",
		"excerpt" : "Ugh. This is getting really ugly. ... because quite frankly, the whole spinunlock inlining logic is *already* unreadable, and you just made it worse."
	},
	{
		"date" : "3\/22\/2012 18:07:38",
		"permalink" : "http:\/\/markmail.org\/message\/koy5eiv3bsbiqnhj",
		"type" : "C",
		"excerpt" : "... Why do I call it a total disaster? ... More importantly, they are both IDENTICALLY BAD. They are crap because: ... Doing a function call for these things is stupid. ..."
	},
	{
		"date" : "3\/22\/2012 20:15:36",
		"permalink" : "http:\/\/markmail.org\/message\/6t2fviwfm4kb2xxp",
		"type" : "B",
		"excerpt" : "... I will not be pulling this tree at all. It's pure and utter shit, and I wonder how long (forever?) this has been going on. ...the thing that makes me go \"uhhuh, no way in *hell* should I pull this\" is that you have apparently totally broken all sign-offs. Avi, you ABSOLUTELY MUST NOT rebase other peoples commits. That's a total no-no. And one thing I notice when I look through the commits is that you have totally broken the Signed-off-by: series in the process, exactly because what you do is crap, crap, CRAP. ... That's simply not true in your tree. Maybe because you have rebased other peoples (Alexander's) commits? I see commits where the sign-off ends with Alexander, but then the committer is you. WTF? Fix your f*cking broken shit *now*. I'm not pulling crap like this. And it makes me unhappy to realize that this has probably happened a long time and I haven't even noticed. The whole \"you MUST NOT rebase other peoples commits\" is the thing I've been telling people for *years* now. Why the hell is it still going on?"
	},
	{
		"date" : "3\/28\/2012 21:24:18",
		"permalink" : "http:\/\/markmail.org\/message\/gj44tkutjg4y7y6t",
		"type" : "C",
		"excerpt" : "Ugh: ... Can we please move that abortion into arch\/powerpc\/? Instead of making generic code even uglier.."
	},
	{
		"date" : "3\/29\/2012 12:31:52",
		"permalink" : "http:\/\/markmail.org\/message\/shn5pikjabdiw4ss",
		"type" : "P",
		"excerpt" : "Your original email used \"torv...@osdl.org\", which goes into a kind-of-black hole. Please fix whatever crazy-old address book you have - that address is old, old, old. Oh, and your *new* email had totally broken email headers too. WTF? That ... is just pure and utter garbage. What the hell is wrong with your email setup? When I reply to that email, I sure as hell want to reply to *you*, not to *me*. So fix your email, right now it's terminally broken. Will look at the pull requests now that I actually see them, and when I'm over being upset by your idiotic email issues."
	},
	{
		"date" : "3\/30\/2012 12:16:32",
		"permalink" : "http:\/\/markmail.org\/message\/smg2va3obl3tjcgt",
		"type" : "C",
		"excerpt" : "Finally, people - your merge messages suck. Leaving the list of conflicting files without talking about what the conflict actually was is *not* a good merge message. Len, you're not the only one that does this, but it is yet another reason why I absolutely detest some of the merges I see: they are just very uninformative, and don't add anything useful to the tree - quite the reverse. They hide a problem, without actually talking about what the problem was. ...And yes, sometimes my merge messages suck too (although I've tried very hard to become better at them)."
	},
	{
		"date" : "3\/30\/2012 15:39:22",
		"permalink" : "http:\/\/markmail.org\/message\/capsv5nvywxl7upx",
		"type" : "B",
		"excerpt" : "Grr. Most of these patches have the same stupid problem: why the *hell* do you repeat the single-line top-level description in both the Subject line and the body of the email? It only results in stupid duplicate lines in the commit logs. This is a disease. I don't know who the heck started doing it, but it's WRONG. It's stupid. What broken piece-of-shit tool is it that does this braindamage? Fix it. Stop sending these broken commit messages to people. I'm grumpy, yes, because this is a common problem. I see it all over the place, and it makes our commit logs look f*cking retarded. ..."
	},
	{
		"date" : "4\/5\/2012 10:09:33",
		"permalink" : "http:\/\/markmail.org\/message\/bh4ync7fbykaxwzv",
		"type" : "C",
		"excerpt" : "... Why has this been explicitly designed to be as ugly as humanly possible, and to be so inconvenient to parse too? ... So here's a serious suggestion: aim for \"line oriented\". ... ...That's stupid. Don't do it. ...Because this is just pure and utter *shit*: ...This part gets a big NAK from me. I don't see the point of this. It's pure crap. There's no advantage. And the \"use an uint64_t\" is a classic case of just being a f*cking moron. ...This is the kind of thinking and code that just makes me go \"No way, not today, not ever\". It's *stupid*."
	},
	{
		"date" : "4\/9\/2012 15:29:51",
		"permalink" : "http:\/\/markmail.org\/message\/b6regz6h4iel6lyq",
		"type" : "B",
		"excerpt" : "Oh, *HELL*NO*! It's a fucking disaster in \"Oh, one notifier was broken, SO LET'S ADD ANOTHER RANDOM ONE TO FIX THAT\". The definition of insanity is doing the same thing over and over and thinking you get a different result. Let's not do that kind of idiotic thing. Notifiers are evil crap. Let's make *fewer* of them, not add yet-another-random-notifier-for-some-random-reason. F*ck me, but how I hate those random notifiers. And I hate people who add them willy nilly."
	},
	{
		"date" : "4\/12\/2012 12:05:23",
		"permalink" : "http:\/\/markmail.org\/message\/itukxtb7z2d5wh6w",
		"type" : "B",
		"excerpt" : "...So stop complaining. Reverts really *are* just patches, Greg is 100% right, and you are simply wrong. ...and the fact that you *continue* to complain just makes you look stupid."
	},
	{
		"date" : "4\/12\/2012 14:33:47",
		"permalink" : "http:\/\/markmail.org\/message\/ubwct7u24synra4k",
		"type" : "P",
		"excerpt" : "You're a fucking moron. ... So just reverting it from stable, *WITHOUT LEARNING THE LESSON*, is not a no-op at all, it's a sign of being a f*cking moron. I'm stupider for just reading your email. Go away."
	},
	{
		"date" : "4\/12\/2012 15:07:29",
		"permalink" : "http:\/\/markmail.org\/message\/lyo6lblmxx5ur454",
		"type" : "P",
		"excerpt" : "Stop the idiotic arguing already."
	},
	{
		"date" : "4\/13\/2012 17:44:14",
		"permalink" : "http:\/\/markmail.org\/message\/yrqadud37zpdpera",
		"type" : "B",
		"excerpt" : "Please don't continue to spread this total bogosity. ...That's a total idiotic lie by C++ apologists, and I hate hearing it repeated over and over again. And it really *is* a lie. ... Which is clearly insane, but is also technically simply *wrong*. ... Which is utter and complete bullshit, and any amount of brains would have realized that ... It has always been just nothing but a moronic hang-up, and it has always been *wrong*. So don't spread that lie. It was wrong. ... which is pure and utter garbage. And then they lie, and claim that their *weaker* type system NULL is \"stronger\". Pure idiocy."
	},
	{
		"date" : "4\/14\/2012 0:51:09",
		"permalink" : "http:\/\/markmail.org\/message\/apc5qjhvycfg5ufa",
		"type" : "C",
		"excerpt" : "...And a C++ person who says that \"(vodi *)0\" is just any \"void *\" is a *fucking*moron*, ...There is absolutely *zero* excuse for the idiotic traditional C++ brain damage of saying \"NULL cannot be '(void *)0', because 'void *' will warn\". Anybody who says that is lying. ... The C++ people? They are morons, and they never got it, and in fact they spent much of their limited mental effort arguing against it. ... The whole \"it's a stronger type system, so NULL has to be 0\" is pure and utter garbage. It's wrong. It's stupid. ... Yeah, I'm not a fan of C++. It's a cruddy language."
	},
	{
		"date" : "4\/14\/2012 14:17:30",
		"permalink" : "http:\/\/markmail.org\/message\/kpeen3tskyftasrs",
		"type" : "C",
		"excerpt" : "They may be readable, but they are total shit. ... So no. Hell no."
	},
	{
		"date" : "4\/15\/2012 10:48:39",
		"permalink" : "http:\/\/markmail.org\/message\/2okvqhgmmbk6mavm",
		"type" : "P",
		"excerpt" : "And if you cannot understand what tens of people have tried to explain to you, you are just f*cking stupid."
	},
	{
		"date" : "4\/16\/2012 12:08:49",
		"permalink" : "http:\/\/markmail.org\/message\/6lvn6z57ozzcmlm2",
		"type" : "C",
		"excerpt" : "Ugh, I personally hate it. ... Your suggested format just sucks, and has the worst of all worlds."
	},
	{
		"date" : "4\/24\/2012 12:37:30",
		"permalink" : "http:\/\/markmail.org\/message\/ls5g34xsirkagjdl",
		"type" : "C",
		"excerpt" : "...This is wrong. Or at least stupid."
	},
	{
		"date" : "4\/24\/2012 18:45:51",
		"permalink" : "http:\/\/markmail.org\/message\/ckcwu6icpdtzlum2",
		"type" : "C",
		"excerpt" : "Oh christ. What insane version of gcc is that? Can you please make a gcc bug-report? ... is just so fricking stupid that it's outright buggy. That's just crazy. It's demented. It's an \"and\" with all bits set."
	},
	{
		"date" : "4\/27\/2012 9:35:35",
		"permalink" : "http:\/\/markmail.org\/message\/7dwbpurjzcxumkyu",
		"type" : "C",
		"excerpt" : "...which is obviously completely bogus - it's even broken the constant. Your address simplification does something horribly bad. ... That's a totally worthless instruction. ... That \",1\" is completely bogus, and I don't understand why the tools show that idiotic format to begin with. It's pure garbage. It adds zero information.... That \"0x0\" is more useless garbage in the same vein. ... Btw, don't get me wrong. I really like the changes. "
	},
	{
		"date" : "5\/9\/2012 18:12:45",
		"permalink" : "http:\/\/markmail.org\/message\/vrtkcayj2bi6v7uq",
		"type" : "P",
		"excerpt" : "Oh christ, I also cannot be bothered to continue arguing with you since you seemingly randomly drop other people from the discussion. So don't expect any more replies from me."
	},
	{
		"date" : "5\/10\/2012 9:47:00",
		"permalink" : "http:\/\/markmail.org\/message\/52znomrz6qlpykvz",
		"type" : "B",
		"excerpt" : "Don't try to change the rules because you think you are \"clever\". You're only making things worse."
	},
	{
		"date" : "5\/10\/2012 14:57:45",
		"permalink" : "http:\/\/markmail.org\/message\/mry6hxuhovio3ixb",
		"type" : "B",
		"excerpt" : "So? Even if we hadn't had this bug before (we have), your argument is utter crap. ...Stop arguing for crap."
	},
	{
		"date" : "5\/17\/2012 15:31:37",
		"permalink" : "http:\/\/markmail.org\/message\/n3unxmpwoyps6r7o",
		"type" : "C",
		"excerpt" : "I absolutely detest these types. I realize that we already have a few users, but just looking at these diffs *hurts*. It's disgusting."
	},
	{
		"date" : "5\/17\/2012 20:33:21",
		"permalink" : "http:\/\/markmail.org\/message\/6uyne3c5nu7rxxcl",
		"type" : "C",
		"excerpt" : "Ok, this code is a rats nest. ... The code is crazy. It's an unreadable mess. Not surprising that it then also is buggy.... Looking at the code, I don't think it has been written by a human. ... Some of that code is clearly pure garbage. ... In fact, it's *all* crap. "
	},
	{
		"date" : "5\/19\/2012 10:08:31",
		"permalink" : "http:\/\/markmail.org\/message\/livvej2ebcpk64zd",
		"type" : "B",
		"excerpt" : "NAK NAK NAK. Ingo, please don't take any of these patches if they are starting to make NUMA scheduling be some arch-specific crap. Peter - you're way off base. You are totally and utterly wrong for several reasons: ...so making some arch-specific NUMA crap is *idiotic*. Your argument ...is pure crap. ... Christ, people. ...is just f*cking moronic. ... Stop the idiocy. ..."
	},
	{
		"date" : "5\/21\/2012 16:43:34",
		"permalink" : "http:\/\/markmail.org\/message\/aw2kxp3cyedu6shq",
		"type" : "B",
		"excerpt" : "Wrong. ... so you're just full of it. ... Checking the MCE data is stupid and wrong. Stop doing it, and stop making idiotic excuses for it. ...you are just doing moronic things. Stop doing stupid things."
	},
	{
		"date" : "5\/22\/2012 19:50:06",
		"permalink" : "http:\/\/markmail.org\/message\/ii4sismm64mozslm",
		"type" : "C",
		"excerpt" : "Ugh. No. That is too disgusting for words."
	},
	{
		"date" : "5\/24\/2012 11:20:57",
		"permalink" : "http:\/\/markmail.org\/message\/c3323f2ole4j2wxk",
		"type" : "B",
		"excerpt" : "*NEITHER* of your points actually address my issue. ... IOW, why the hell do you set a name that is so useful that no sane person would ever want to use it? ... So let me be more blunt and direct: which part of \"that's f*cking stupid\" do you disagree with? So instead of making drivers do stupid things because you've made the input layer names so damn useless, why don't you make the input layer use better naming? Doesn't that seem to be the *smart* thing to do?"
	},
	{
		"date" : "5\/24\/2012 13:10:51",
		"permalink" : "http:\/\/markmail.org\/message\/d7bid3niqwudezo3",
		"type" : "P",
		"excerpt" : "I'll let you think about just how stupid that comment was for a moment."
	},
	{
		"date" : "6\/7\/2012 17:25:11",
		"permalink" : "http:\/\/markmail.org\/message\/t7l4p5mxplznn7x4",
		"type" : "C",
		"excerpt" : "Ugh, looking more at the patch, I'm getting more and more convinces that it is pure and utter garbage. ... WTF? ... This is crap, guys. Seriously. Stop playing russian rulette with this code."
	},
	{
		"date" : "6\/12\/2012 8:26:01",
		"permalink" : "http:\/\/markmail.org\/message\/rma3xbyetfmweigo",
		"type" : "C",
		"excerpt" : "No, that's just crazy. Now you make broken shit code work, and then you break the *correct* code... Just face it: if somebody doesn't have an interrupt-time function pointer, they need to rethink their code. It's a mistake. It's broken shit. Why pander to crap? "
	},
	{
		"date" : "6\/26\/2012 12:00:56",
		"permalink" : "http:\/\/markmail.org\/message\/ebs2pmmqdb7q65qq",
		"type" : "C",
		"excerpt" : "This is too damn ugly. These kinds of \"conditionally take lock\" things are always just bugs waiting to happen. Don't do it. ... These kinds of \"bool lock\" crap things have to die. They are *wrong*. They are a sign of bad locking rules."
	},
	{
		"date" : "7\/2\/2012 15:22:55",
		"permalink" : "http:\/\/markmail.org\/message\/smfscgbodyo7tffi",
		"type" : "B",
		"excerpt" : "Umm. That just smells like BS to me. ... Also, your protection claim seems to be invalidated by the actual code. ... So your claim that it hedges around it by looking at the inquiry data is pure crap. It's simply not true. ... So no, I simply don't see the careful testing or the checking that you claim exists."
	},
	{
		"date" : "7\/5\/2012 11:34:49",
		"permalink" : "http:\/\/markmail.org\/message\/vpm47rccr2tratwj",
		"type" : "C",
		"excerpt" : "This is horrible, I think. NAK NAK NAK. ... So don't do this. It's stupid. ... I absolutely *detest* patches like this that make *practical* security worse, in the name of some idiotic theoretical worry that nobody has any reason to believe is real."
	},
	{
		"date" : "7\/6\/2012 13:29:38",
		"permalink" : "http:\/\/markmail.org\/message\/qwv74fvg3pqnk4eo",
		"type" : "B",
		"excerpt" : "Kay, this needs to be fixed. ... Of course, I'd also suggest that whoever was the genius who thought it was a good idea to read things ONE F*CKING BYTE AT A TIME with system calls for each byte should be retroactively aborted. Who the f*ck does idiotic things like that? How did they noty die as babies, considering that they were likely too stupid to find a tit to suck on?"
	},
	{
		"date" : "7\/9\/2012 19:28:34",
		"permalink" : "http:\/\/markmail.org\/message\/6ieajwxtjcw6ba3d",
		"type" : "B",
		"excerpt" : "sizeof without parenthesis is an abomination, and should never be used. ... The sane solution is: just add the f*cking parenthesis, and don't use the parsing oddity. ... And talking about \"prefix operators\" is a moronic thing to do. ... Think of it as a function, and get over your idiotic pissing match over how long you've both known C. That's irrelevant. ..."
	},
	{
		"date" : "7\/11\/2012 1:52:32",
		"permalink" : "http:\/\/markmail.org\/message\/korjohhsmhlgcwti",
		"type" : "C",
		"excerpt" : "Absolutely. Anybody who does that is just terminally confused. \"return()\" is in no way a function. ... Here's an example of a really bad use of \"sizeof\" that doesn't have the parenthesis around the argument: sizeof(*p)->member. Quite frankly, if you do this, you should be shot. ... And let's face it: if you write your code so that it's easy to parse for a machine, and ignore how easy it is to parse for a human, I don't want you writing kernel code. ..."
	},
	{
		"date" : "7\/15\/2012 16:52:58",
		"permalink" : "http:\/\/markmail.org\/message\/iig6w6kjn4x44a6c",
		"type" : "C",
		"excerpt" : "... However, please don't use the *INSANE* ARM \"v8\" naming. There must be something in the water in Cambridge, but the ARM \"version\" naming is just totally broken. ...maybe it all makes sense if you have drunk the ARM cool-aid and have joined the ARM cult, but to sane people and outsiders, it is just a f*cking mess. So - aarch64 is just another druggie name that the ARM people came up with after drinking too much of the spiked water in cambridge. ... - armv8 is totally idiotic and incomprehensible to anybody else...complete and utter nonsense. It's only confusing. Christ. Seriously. The insanity is so strong in the ARM version names that it burns. If it really makes sense to anybody ... you need to have your head examined. So please don't use \"aarch64\", because it's just f*cking crazy. And please don't use \"armv8\", because it's just completely retarded and confused."
	},
	{
		"date" : "7\/16\/2012 9:50:18",
		"permalink" : "http:\/\/markmail.org\/message\/stthptqsofmabsfe",
		"type" : "B",
		"excerpt" : "Guys, stop it now. Your \"problem\" isn't what any sane person cares about, and isn't what I started the RFC for. Seriously. NOBODY CARES. ... Stop whining."
	},
	{
		"date" : "7\/23\/2012 12:08:58",
		"permalink" : "http:\/\/markmail.org\/message\/7uuk2at4vzrd3vve",
		"type" : "B",
		"excerpt" : "Seriously. People who use BUG() statements like some kind of assert() are a menace to society. They kill machines."
	},
	{
		"date" : "7\/31\/2012 14:53:42",
		"permalink" : "http:\/\/markmail.org\/message\/ulgml3kxn4ys56ez",
		"type" : "C",
		"excerpt" : "And the commit seems to be pure shit. Why is it pure shit? Look at what users are left. THERE ARE NO USERS THAT SET THAT FIELD ANY MORE! ... I've pulled the changes for now, but I absolutely *detest* seeing things like this. ..."
	},
	{
		"date" : "9\/5\/2012 19:46:40",
		"permalink" : "http:\/\/markmail.org\/message\/bjt22z2iyiidsij3",
		"type" : "C",
		"excerpt" : "Stop this \"we can break stuff\" crap. Who maintains udev? Regressions are not acceptable. I'm not going to change the kernel because udev broke, f*ck it. Seriously. More projects need to realize that regressions are totally and utterly unacceptable. ... That just encourages those package maintainers to be shit maintainers. ... And stop blaming the kernel for user space breakage!..."
	},
	{
		"date" : "9\/14\/2012 14:14:34",
		"permalink" : "http:\/\/markmail.org\/message\/adaxvroyz33wz2ff",
		"type" : "B",
		"excerpt" : "This patch is insane. This is pure garbage. Anybody who thinks this: ... is a good idea should be shot. Don't do it. ...That's just f*cking insane. Stop this kind of idiocy. The code looks bad, and the logic is pure shit too."
	},
	{
		"date" : "9\/16\/2012 12:56:37",
		"permalink" : "http:\/\/markmail.org\/message\/j3uroyzkdx3nqghw",
		"type" : "C",
		"excerpt" : "... And it really is all stupidly and badly done. I bet we can make that code faster without really changing the  end result at all, just changing the algorithm. ... In fact, looking at select_idle_sibling(), I just want to puke. The thing is crazy. ... instead it does totally f*cking insane things ... The code is shit. Just fix the shit, instead of trying to come up with some totally different model. Ok? ..."
	},
	{
		"date" : "9\/30\/2012 10:50:58",
		"permalink" : "http:\/\/markmail.org\/message\/exu4jozhhfdbxf3t",
		"type" : "B",
		"excerpt" : "... I don't understand why this seems to be so hard for people to understand. ...this whole thread is a wonderful example of how F*CKING STUPID it was to even consider it. ... SO STOP DOING ABI CHANGES. WE DON'T DO THEM. ...but anybody who does it on purpose \"just because\" should not be involved in kernel development (or library development for that matter)."
	},
	{
		"date" : "10\/3\/2012 7:44:07",
		"permalink" : "http:\/\/markmail.org\/message\/2s4sahuqnnfxytjc",
		"type" : "B",
		"excerpt" : "Stop this idiocy. ... The fact that you then continually try to make this a \"kernel issue\" is just disgusting. Talking about the kernel solving it \"properly\" is pretty dishonest, when the kernel wasn't the problem in the first place. "
	},
	{
		"date" : "10\/3\/2012 11:06:47",
		"permalink" : "http:\/\/markmail.org\/message\/5fqjb4vjzh6idyzm",
		"type" : "P",
		"excerpt" : "I also call bullshit on your \"it will surely be fixed when we know what's the right fix\" excuses. The fact is, you've spent the last several months blaming everybody but yourself, and actively told people to stop blaming you: ... despite having clearly seen the patch (you *replied* to it, for chissake, and I even told you in that same thread why that reply was wrong at the time). ... Kay, you are so full of sh*t that it's not funny. You're refusing to acknowledge your bugs, you refuse to fix them even when a patch is sent to you, and then you make excuses for the fact that we have to work around *your* bugs, and say that we should have done so from the very beginning. Yes, doing it in the kernel is \"more robust\". But don't play games, and stop the lying."
	},
	{
		"date" : "10\/13\/2012 17:33:52",
		"permalink" : "http:\/\/markmail.org\/message\/drhzuge43dxaqfqb",
		"type" : "C",
		"excerpt" : "David, I want to make it very clear that if you *ever* suggest another big include file cleanup, I will say \"f*ck no\" and block you from my emails forever. Ok? So don't bother. We're done with these kinds of games. Forever. It's not worth it, don't ever suggest it again for some other \"cleanup\"."
	},
	{
		"date" : "10\/17\/2012 15:44:05",
		"permalink" : "http:\/\/markmail.org\/message\/r3sjrhts3t7bqdxm",
		"type" : "C",
		"excerpt" : "That's just disgusting crazy talk. Christ, David, get a grip on yourself. ..."
	},
	{
		"date" : "10\/25\/2012 13:10:04",
		"permalink" : "http:\/\/markmail.org\/message\/54aixu5ngczjm46r",
		"type" : "C",
		"excerpt" : "Stop doing this f*cking crazy ad-hoc \"I have some other name available\" #defines. Use the same name, for chissake! Don't make up new random names. Just do ... to define the generic thing. Instead of having this INSANE \"two different names for the same f*cking thing\" crap. Stop it. Really. ...So NAK on this whole patch. It's bad. It's ugly, it's wrong, and it's actively buggy."
	},
	{
		"date" : "10\/25\/2012 13:16:56",
		"permalink" : "http:\/\/markmail.org\/message\/heh52ti35sar5odm",
		"type" : "B",
		"excerpt" : "Did anybody ever actually look at this sh*t-for-brains patch? Yeah, I'm grumpy. But I'm wasting time looking at patches that have new code in them that is stupid and retarded. This is the VM, guys, we don't add stupid and retarded code. LOOK at the code, for chrissake. Just look at it. And if you don't see why the above is stupid and retarded, you damn well shouldn't be touching VM code."
	},
	{
		"date" : "10\/25\/2012 19:56:25",
		"permalink" : "http:\/\/markmail.org\/message\/kmaq7fosctfrme6y",
		"type" : "B",
		"excerpt" : "Rik, *LOOK* at the code like I asked you to, instead of making excuses for it. I'm not necessarily arguing with what the code tries to do. I'm arguing with the fact that the code is pure and utter *garbage*. It has two major (and I mean *MAJOR*) problems, both of which individually should make you ashamed for ever posting that piece of shit: The obvious-without-even-understanding-semantics problem: - it's humongously stupidly written. It calculates that 'flush_remote' flag WHETHER IT GETS USED OR NOT. Christ. I can kind of expect stuff like that in driver code etc, but in VM routines? Yes, the compiler may be smart enough to actually fix up the idiocy. That doesn't make it less stupid. The more-subtle-but-fundamental-problem: - regardless of how stupidly written it is on a very superficial level, it's even more stupid in a much more fundamental way. ... In other words, everything that was added by that patch is PURE AND UTTER SHIT. And THAT is what I'm objecting to. ... Because everything I see about \"flush_remote\" looks just wrong, wrong, wrong. And if there really is some reason for that whole flush_remote braindamage, then we have much bigger problems ... So that patch should be burned, and possibly used as an example of horribly crappy code for later generations. At no point should it be applied."
	},
	{
		"date" : "10\/26\/2012 13:11:49",
		"permalink" : "http:\/\/markmail.org\/message\/sw7db56lvg3o6dsu",
		"type" : "C",
		"excerpt" : "But dammit, every single discussion I see, you use some *other* argument for it, like \"people don't have initrd\" or whatever crazy crap. That's what I was objecting to."
	},
	{
		"date" : "10\/26\/2012 13:26:49",
		"permalink" : "http:\/\/markmail.org\/message\/tjvpodxvfwhdg3gk",
		"type" : "B",
		"excerpt" : "Kees, you don't seem to understand. Breaking applications is unacceptable. End of story. It's broken them. Get over it. ... Your \"IT HAS TO BE DONE AT BOOT TIME, THE SKY IS FALLING, NOTHING ELSE IS ACCEPTABLE!\" ranting is a disease. Stop it."
	},
	{
		"date" : "11\/1\/2012 16:23:51",
		"permalink" : "http:\/\/markmail.org\/message\/rcu6l5l2a4h5pxeb",
		"type" : "C",
		"excerpt" : "We've been here before, haven't we? There's so much wrong with this that it's not funny. ... And I know you can do them, because you've done them in the past. So please don't continue to do the above."
	},
	{
		"date" : "11\/12\/2012 17:22:18",
		"permalink" : "http:\/\/markmail.org\/message\/fum42xlb6uv455py",
		"type" : "C",
		"excerpt" : "What part of \"We don't break user space\" do you have trouble understanding? ... End of discussion. I don't understand why people have such a hard time understanding such a simple concept. ... Seriously, IT IS THAT SIMPLE."
	},
	{
		"date" : "11\/16\/2012 7:31:38",
		"permalink" : "http:\/\/markmail.org\/message\/lnxwloth4pmzojvs",
		"type" : "B",
		"excerpt" : "PLEASE NO! Dammit, why is this disease still so prevalent, and why do people continue to do this crap? __HAVE_ARCH_xyzzy is a f*cking retarded thing to do, and that's actually an insult to retarded people. ... The ... thing is a disease. ..."
	},
	{
		"date" : "11\/19\/2012 17:01:50",
		"permalink" : "http:\/\/markmail.org\/message\/es442swgwwt3styg",
		"type" : "B",
		"excerpt" : "Ingo, stop doing this kind of crap. ... You seem to be in total denial. ... Stop it. That kind of \"head-in-the-sand\" behavior is not conducive to good code, ... Seriously. If you can't make the non-THP case go faster, don't even bother sending out the patches. Similarly, if you cannot take performance results from others, don't even bother sending out the patches. ... So stop ignoring the feedback, and stop shooting the messenger. Look at the numbers, and admit that there is something that needs to be fixed."
	},
	{
		"date" : "11\/21\/2012 9:02:06",
		"permalink" : "http:\/\/markmail.org\/message\/untgvt4vwfcdods4",
		"type" : "B",
		"excerpt" : "Ingo, stop it already! This is *exactly* the kind of \"blame everybody else than yourself\" behavior that I was talking about earlier. ... Ingo, look your code in the mirror some day, and ask yourself: why do you think this fixes a \"regression\"? ...So by trying to make up for vsyscalls only in your numbers, you are basically trying to lie about regressions, and try to cover up the schednuma regression by fixing something else. ... See? That's bogus. When you now compare numbers, YOU ARE LYING. You have introduced a performance regression, and then trying to hide it by making something else go faster. ...The same is true of all your arguments about Mel's numbers wrt THP etc. Your arguments are misleading - either intentionally, of because you yourself didn't think things through. ..."
	},
	{
		"date" : "11\/29\/2012 11:50:20",
		"permalink" : "http:\/\/markmail.org\/message\/clmcwj3xd77qm4am",
		"type" : "C",
		"excerpt" : "... Christ. That code is a mess. ..."
	},
	{
		"date" : "11\/29\/2012 12:10:30",
		"permalink" : "http:\/\/markmail.org\/message\/erlfs2pnavasy7d4",
		"type" : "C",
		"excerpt" : "The games with \"max_block\" are hilarious. In a really sad way. That whole blkdev_get_blocks() function is pure and utter shit."
	},
	{
		"date" : "11\/29\/2012 14:16:27",
		"permalink" : "http:\/\/markmail.org\/message\/aqobzj5zdjcu4gn6",
		"type" : "C",
		"excerpt" : "What a crock. That direct-IO code is hack-upon-hack. Whoever wrote it should be shot. ..."
	},
	{
		"date" : "12\/1\/2012 13:15:59",
		"permalink" : "http:\/\/markmail.org\/message\/5ggie5rmwjtqg66y",
		"type" : "C",
		"excerpt" : "No. That patch is braindead. I wouldn't pull it even if it wasn't this late. ... What the f*ck is the point? ... What am I missing?"
	},
	{
		"date" : "12\/5\/2012 7:45:16",
		"permalink" : "http:\/\/markmail.org\/message\/bg7vnscuskyqygzi",
		"type" : "B",
		"excerpt" : "Christ guys. This whole thread is retarded. The *ONLY* reason people seem to have for reverting that is a \"ooh, my feelings are hurt by how this was done, and now I'm a pissy bitch and I want to get this reverted\". Stop the f*cking around already. ... And if your little feelings got hurt, get your mommy to tuck you in, don't email me about it. Because I'm not exactly known for my deep emotional understanding and supportive personality, am I?"
	},
	{
		"date" : "12\/6\/2012 8:50:31",
		"permalink" : "http:\/\/markmail.org\/message\/c7eqwpq7yt6xgwwf",
		"type" : "C",
		"excerpt" : "Ugh. This patch makes my eyes bleed. ... So I guess this patch fixes things, but it does make me go \"That's really *really* ugly\"."
	},
	{
		"date" : "12\/7\/2012 10:17:37",
		"permalink" : "http:\/\/markmail.org\/message\/ujigvddzqf3ohtf3",
		"type" : "B",
		"excerpt" : "Christ, I promised myself to not respond any more to this thread, but the insanity just continues, from people who damn well should know better. ... So stop these dishonest and disingenious arguments. They are full of crap. ... Every single argument I've heard of from the \"please revert\" camp has been inane. And they've been *transparently* inane, to the point where I don't understand how you can make them with a straght face and not be ashamed. ... Bullshit.... Anybody who claims that our \"process\" requires that things like that go on the mailing list and pass long reviews and discussions IS JUST LYING. ... Read the above arguments, and realise how shrill and outright STUPID that kind of \"we can now do anything without review\" argument is. ... You seem to seriously argue that it's a *bad* thing to put a note that one bit is already in use. That's f*cking moronic.... But that's not what the insane and pointless arguments in this thread have been. The whole thread has been just choch-full of pure STUPID. Please stop the inane and idiotic arguments already. The \"we must review every one-liner, and this destroys and makes a mockery of our review process\" argument in particular has been dishonest and pure crap...."
	},
	{
		"date" : "12\/11\/2012 10:35:34",
		"permalink" : "http:\/\/markmail.org\/message\/6zbrogfo7rrqh55a",
		"type" : "P",
		"excerpt" : "The reading comprehension here is abysmal. ...And none of that matters for my argument AT ALL."
	},
	{
		"date" : "12\/12\/2012 19:51:29",
		"permalink" : "http:\/\/markmail.org\/message\/txbei2mxh2uut2ty",
		"type" : "C",
		"excerpt" : "So please, just remove that idiotic \"if (!event->attr.exclude_guest)\" test. It's wrong. It cannot possibly do the right thing.  It is totally misdesigned, exactly because you don't even know beforehand if somebody uses virtualization or not."
	},
	{
		"date" : "12\/13\/2012 14:22:11",
		"permalink" : "http:\/\/markmail.org\/message\/djo5bcmnmbq2ipk5",
		"type" : "P",
		"excerpt" : "Christ, why can't people learn?"
	},
	{
		"date" : "12\/16\/2012 11:57:46",
		"permalink" : "http:\/\/markmail.org\/message\/6ednzyn5lyzuwnna",
		"type" : "C",
		"excerpt" : "Ugh. This patch is just too ugly. Conditional locking like this is just too disgusting for words. ... I'm not applying disgusting hacks like this. ... No \"if (write) up_write() else up_read()\" crap. "
	},
	{
		"date" : "12\/18\/2012 8:49:25",
		"permalink" : "http:\/\/markmail.org\/message\/lcrjga7m5t5wzdjs",
		"type" : "C",
		"excerpt" : "Grr. This is still bullshit. Doing this: ... is fundamentally crap ... So doing *any* of these calculations in bytes is pure and utter crap. ... Anything that works in bytes is simply pure crap. And don't talk to me about 64-bit math and doing it in \"u64\" or \"loff_t\", that's just utterly moronic too. ... So the math is confused, the types are confused, and the naming is confused. Please, somebody check this out, because now *I* am confused. And btw, that whole commit happened too f*cking late too. ... I'm grumpy, because all of this code is UTTER SH*T, and it was sent to me. Why?"
	},
	{
		"date" : "12\/21\/2012 8:53:10",
		"permalink" : "http:\/\/markmail.org\/message\/h73brnajmgtx6t6x",
		"type" : "B",
		"excerpt" : "Christ, Mel. Your reasons in b22d127a39dd are weak as hell, and then you come up with *THIS* shit instead: ... Heck no. In fact, not a f*cking way in hell. Look yourself in the mirror, Mel. This patch is ugly, and *guaranteed* to result in subtle locking issues, and then you have the *gall* to quote the \"uhh, that's a bit ugly due to some trivial duplication\" thing in commit...  compared to the diseased abortion you just posted..."
	},
	{
		"date" : "12\/23\/2012 9:35:52",
		"permalink" : "http:\/\/markmail.org\/message\/3d3xulbwivjeotio",
		"type" : "B",
		"excerpt" : "Mauro, SHUT THE FUCK UP! It's a bug alright - in the kernel. How long have you been a maintainer? And you *still* haven't learnt the first rule of kernel maintenance? ... Shut up, Mauro. And I don't _ever_ want to hear that kind of obvious garbage and idiocy from a kernel maintainer again. Seriously. ...The fact that you then try to make *excuses* for breaking user space, and blaming some external program that *used* to work, is just shameful. It's not how we work. Fix your f*cking \"compliance tool\", because it is obviously broken. And fix your approach to kernel programming"
	},
	{
		"date" : "12\/23\/2012 14:28:41",
		"permalink" : "http:\/\/markmail.org\/message\/cfwfzsfse5qhdcoq",
		"type" : "C",
		"excerpt" : "Yes, I'm upset. Very upset. ... So your question \"why would pulseaudio care\" is totally *irrelevant*, senseless, and has nothing to do with anything."
	}
]

module.exports = data;
