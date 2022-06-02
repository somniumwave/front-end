import Head from'next/head'
import Link from 'next/link'
import Unity, { UnityContext } from "react-unity-webgl"
import UnityCanvas from '../components/UnityCanvas'

export default function Enter() {
  return (
    <UnityCanvas />
  )
}