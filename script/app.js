const u = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCzfu8Y5CsN7OCLJhZy_fH6w&key=AIzaSyAGAH622Kh6wCE4-IKOU2pjzLjoxMzQYmU';
const snippet = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCzfu8Y5CsN7OCLJhZy_fH6w&key=AIzaSyAGAH622Kh6wCE4-IKOU2pjzLjoxMzQYmU';

const getBalk = function(jsonObject)
{
  jsHolderBalk = document.querySelector('.js-balk');
}

const getGoal = function(jsonObject)
{
  jsHolder = document.querySelector('.js-endnummer');
  let object = jsonObject.items[0].statistics.subscriberCount;

  if(object < 1000000)
    {
        if(object < 100000)
        {
            if(object < 10000)
            {
                if(object < 1000)
                {
                    if(object < 100)
                    {
                        console.log(100);
                        jsHolder.innerHTML = "100"
                    }
                    else
                    {
                        console.log(1,000);
                        jsHolder.innerHTML = "1,000"
                    }
                }
                else
                {
                    console.log(10,000);
                    jsHolder.innerHTML = "10,000"
                }
            }
            else
            {
                console.log(100,000);
                jsHolder.innerHTML = "100,000"
            }
        }
        else
        {
            console.log(1,000,000)
            jsHolder.innerHTML = "1,000,000"
        }
    }
    else
    {
        console.log("te groot");
        jsHolder.innerHTML = "veel subs"
    }
    getBalk(jsonObject);
}

const showVideoCount = function(jsonObject)
{
  Holder = document.querySelector('.js-videocount');
  Holder.innerHTML = jsonObject.items[0].statistics.videoCount;
  getGoal(jsonObject);
}

const show = function(jsonObject)
{
    jsHolder = document.querySelector('.js-viewcount');
    jsHolder.innerHTML = jsonObject.items[0].statistics.viewCount;
    showVideoCount(jsonObject);

}

const GetData = function()
{
    fetch(u)
      .then(function (response){
        if (response.ok){
          return response.json();
        }
        else
        {
          throw Error(`probleem met laden van json. ${response.status}`);
          
        }
      })
      .then(function(jsonObject){
        show(jsonObject);
      })
      .catch(function(error){
        console.error(error);
      });   
}

const initialize = function()
{ 
  console.log(u); 
  GetData();
  console.log('Dom Loaded');
    
};
document.addEventListener("DOMContentLoaded", initialize);