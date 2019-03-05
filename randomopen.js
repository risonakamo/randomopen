/*after a random period of time, navigate to a page.
  page: url to go to
  mintime: minimum milleseconds
  maxtime: max milleseconds*/
function randomOpen(page="https://www.youtube.com/watch?v=dQw4w9WgXcQ",mintime=2000,maxtime=30000)
{
    console.log("get ready....");
    return setTimeout(()=>{
        window.location.href=page;
    },Math.floor(Math.random()*(maxtime-mintime))+mintime);
}

/*randomOpen wrapper, for easier usage. give it an object with certain
  properties to set things. possible properties:
  minms,minsecs,minmins,maxms,maxsecs,maxmins: give times to combine to be max or min time
  vid: the video url to play*/
function randomOpen2(options)
{
    var defaults={
        mintime:2000,
        maxtime:30000,
        vid:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    };

    options={...defaults,...options};

    //couldve put this into a loop or something but honestly it would look even more
    //complex and would be harder to extend later on, so this part is implemented as
    //an directly modifying stuff.
    var calcTime=0;

    if (options.minms)
    {
        calcTime+=options.minms;
    }

    if (options.minsecs)
    {
        calcTime+=options.minsecs*1000;
    }

    if (options.minmins)
    {
        calcTime+=options.minmins*60000;
    }

    if (calcTime)
    {
        options.mintime=calcTime;
    }

    calcTime=0;

    if (options.maxms)
    {
        calcTime+=options.maxms;
    }

    if (options.maxsecs)
    {
        calcTime+=options.maxsecs*1000;
    }

    if (options.maxmins)
    {
        calcTime+=options.maxmins*60000;
    }

    if (calcTime)
    {
        options.maxtime=calcTime;
    }

    if (options.mintime>options.maxtime)
    {
        console.warn("mintime greater than maxtime");
        return;
    }

    console.log(options);
    randomOpen(options.vid,options.mintime,options.maxtime);
}