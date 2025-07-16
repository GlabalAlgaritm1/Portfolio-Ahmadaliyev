import { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Portfolio | Ahmadaliyev | ${title}`
  }, [title])
}

export default useTitle
