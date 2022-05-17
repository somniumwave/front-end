import Head from'next/head'
import Link from 'next/link'
import Unity, { UnityContext } from "react-unity-webgl"
import UnityCanvas from '../components/UnityCanvas'
import UnityMobile from '../components/UnityMobile'

export default function Enter() {
  return (
    // <UnityCanvas />
    <UnityMobile />
  )
}