import Layout from '@/components/Layout';
import { wrapper } from '@/redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<Layout>
			<Provider store={store}>
				<Component {...props.pageProps} />
			</Provider>
		</Layout>
	);
}
export default App;
