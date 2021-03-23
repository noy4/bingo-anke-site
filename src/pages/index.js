import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Poster from '../components/Poster'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      // title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.demo}>
            <img src={useBaseUrl('img/iphone.png')} className={styles.demo} />
            <img
              src={useBaseUrl('img/bingo_anke_demo.gif')}
              className={styles.gif}
            />
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to="https://master.d3efwy5vjd8azj.amplifyapp.com/a-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Poster />
      </main>
    </Layout>
  )
}

export default Home