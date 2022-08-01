import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
import React from 'react'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => App,
				enhanceComponent: (Component) => Component,
			})

		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles])
		};
	}

	render() {
		return (
			<Html lang='es'>
				<Head>{CssBaseline.flush()}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument