import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";
import css from "../static/css/app.sass";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class IBApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 300ms, transform 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    );
  }
}
