import "aos/dist/aos.css"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
const Action = lazy(() => import("./components/Action"))
const Choose = lazy(() => import("./components/Choose"))
const Client = lazy(() => import("./components/Client"))
const Footer = lazy(() => import("./components/Footer"))
const HeroSection = lazy(() => import("./components/HeroSection"))
const LiveDemo = lazy(() => import("./components/LiveDemo"))
const Solutions = lazy(() => import("./components/Solutions"))
const Subscription = lazy(() => import("./components/Subscription"))
export default function Home() {
  return (
    <Suspense fallback={<Loading show />}>
      <Loading show={false}>
        <HeroSection />
        <Solutions />
        <Choose />
        <Action />
        <Subscription />
        <Client />
        <LiveDemo />
        <Footer />
      </Loading>
    </Suspense>
  )
}
