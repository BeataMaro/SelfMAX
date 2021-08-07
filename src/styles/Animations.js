import { gsap } from "gsap"

export const animationMoveX = el => {
  gsap.fromTo(
    el,
    { autoAlpha: 0, x: "-=100", duration: 1 },
    { autoAlpha: 1, x: 0 }
  )
}

export const animationMoveY = (el, toTop) => {
  if (toTop)
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: "+=100", duration: 1 },
      { autoAlpha: 1, y: 0 }
    )
  else
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: "-=100", duration: 1 },
      { autoAlpha: 1, y: 0 }
    )
}
