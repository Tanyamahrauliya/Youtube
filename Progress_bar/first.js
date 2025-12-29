window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollPercent = (scrollTop / scrollHeight) * 100;

  document.getElementById("progressBar").style.width =
    scrollPercent + "%";
};
