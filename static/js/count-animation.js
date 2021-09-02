const root = document.querySelector(".counter-root"),
  counters = root.querySelectorAll(".counter"),
  $body = document.body || document.documentElement;

const options = {
  root: $body,
  rootMargin: "-40px",
  threshold: 1.0
}

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

const removeUnwantedChar = (value) => {
  return parseInt(String(value).replace(/,/g, ''))
}

const animateCounters = (counter) => {
  let $this = $(counter),
    countTo = removeUnwantedChar($this.attr('data-target'));
  
  const initial = removeUnwantedChar(counter.innerText)

  if (initial !== countTo) {
    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
      {
        duration: 1500,
        easing: 'linear',
        step: function () {
          $this.text(formatNumber(Math.floor(this.countNum)));
        },
        complete: function () {
          $this.text(formatNumber(this.countNum));
        }
      });
  }
}

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      animateCounters(entry.target)
    }
  })
}

const oberserver = new IntersectionObserver(callback, options);

[...counters].forEach(counter => {
  oberserver.observe(counter)
});
