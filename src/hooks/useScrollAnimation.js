import { useEffect } from 'react'

export default function useScrollAnimation(ref) {
  useEffect(() => {
    if (!ref?.current) return
    const el = ref.current
    const onScroll = () => {
      /* placeholder for scroll animation */
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [ref])
}
