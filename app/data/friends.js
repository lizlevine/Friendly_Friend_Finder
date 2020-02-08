// this file contains all the friends that the user can be matched up with in object form

var friends = [
  {
    name: "Don Draper",
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fwhat-i-learned-about-ux-writing-from-don-draper-337198fa689d&psig=AOvVaw3xA38927AaMgTK-XxzIWjA&ust=1581216038471000&source=images&cd=vfe&ved=https://media.gq.com/photos/5583370e3655c24c6c95e15c/master/w_400%2Cc_limit/copilot-style-201504-1426515514364_don-draper-best-looks-gq-magazine-april-02.jpg",
    scores: ["3", "1", "4", "1", "1", "3", "5", "3", "4", "5"]
  },
  {
    name: "Phoebe Waller",
    photo:
      "https://m.media-amazon.com/images/M/MV5BNDAwNTc4NDUxN15BMl5BanBnXkFtZTgwMzA0MzI5NzM@._CR45,258,1638,922_UX1248_UY702._SY351_SX624_AL_.jpg",
    scores: ["5", "4", "2", "1", "1", "3", "2", "3", "2", "1"]
  },
  {
    name: "Bridgette Bird",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4FDM57FwO9LmTYWwZEYTxmv2bpNo3-Ws8ngraA06P5fY9YwG8",
    scores: ["5", "4", "2", "1", "1", "3", "2", "3", "2", "1"]
  },
  {
    name: "Thomas A. Anderson",
    photo:
      "https://i.gifer.com/origin/da/dac940f44768092fa3767205f994a00a_w200.gif",
    scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
  },
  {
    name: "Elliot Alderson",
    photo:
      "https://www.google.com/url?sa=https://images-na.ssl-images-adata:image/jpeg;base64,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mazon.com/images/I/71jpeW+TYPL._SX268_.jpg&url=https%3A%2F%2Fuxdesign.cc%2Fwhat-i-learned-about-ux-writing-from-don-draper-337198fa689d&psig=AOvVaw3xA38927AaMgTK-XxzIWjA&ust=1581216038471000&source=images&cd=vfe&ved=https://media.gq.com/photos/5583370e3655c24c6c95e15c/master/w_400%2Cc_limit/copilot-style-201504-1426515514364_don-draper-best-looks-gq-magazine-april-02.jpg",
    scores: ["5", "4", "2", "1", "1", "3", "2", "3", "2", "1"]
  },
  {
    name: "The Guy",
    photo:
      "https://tvguide1.cbsistatic.com/i/2015/04/20/c9d227d7-e011-4d1c-929a-f1f6854d2380/9ff8894a21eb1ef3476d8add46a1739a/150420-news-high-maintenance.jpg",
    scores: ["2", "4", "5", "4", "2", "4", "1", "3", "2", "5"]
  },

  {
    name: "Brittany Diaz",
    photo:
      "https://15xomi2v386wytrb8nbsoq34-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/millenial-women-660x400.jpg",
    scores: ["2", "4", "5", "4", "2", "4", "1", "3", "2", "5"]
  },

  {
    name: "Midge Maisel",
    photo:
      "https://media2.fdncms.com/ntslo/imager/u/original/4714787/musicartsculture_movies2-1-30a15dd8db497241.jpg",
    scores: ["2", "4", "5", "4", "2", "4", "1", "3", "2", "5"]
  }
];

module.exports = friends;