// Per https://gist.github.com/LeverOne/1308368
export const generateUUID = function(a,b){
  for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b
};

export const serverDelay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));
