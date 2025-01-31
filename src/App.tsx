import generatePDF, { Margin, Resolution, usePDF } from 'react-to-pdf';
import { Separator } from './components/ui/separator';

export function App() {
	const { targetRef } = usePDF({ filename: 'certificate.pdf' });

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div>
				<div className="w-full flex justify-end mb-4">
					<button
						className="bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
						onClick={() =>
							generatePDF(targetRef, {
								// method: 'open',
								resolution: Resolution.EXTREME,
								page: {
									orientation: 'landscape',
									margin: Margin.LARGE,
								},
								overrides: {
									pdf: {
										compress: true,
									},
								},
							})
						}
					>
						Baixar certificado
					</button>
				</div>
				<main
					ref={targetRef}
					className="flex justify-center items-center w-[848px] h-[595px]"
				>
					<div className="inline-flex flex-row w-full h-full">
						<aside className="bg-[#223329] h-full w-[60px]"></aside>
						<div className="w-full border-2 border-[#223329] flex flex-col p-6">
							<header className="w-full inline-flex flex-row justify-between items-center">
								<img
									src="/fiu-logo.png"
									alt="FIU Logo"
								/>
								<img
									src="/amazoniane-logo.png"
									alt="Amazoniane Logo"
								/>
							</header>
							<Separator
								orientation="horizontal"
								className="bg-[#223329] h-1 opacity-60"
							/>
							<div className="inline-flex flex-row justify-end">
								<span className="text-[#2E7B4E] font-bold">31 de janeiro de 2025</span>
							</div>
							<div className="flex flex-col gap-8">
								<div className="w-[418px] flex flex-col">
									<h1 className="text-[#223329] font-bold text-[80px]">Certificado</h1>
									<p className="text-[#2E7B4E]">
										Certificamos, que para os devidos fins, que
									</p>
									<h2 className="text-[#223329] font-bold text-[20px]">
										Marcos Jhollyfer Felix Rodrigues
									</h2>
									<Separator
										orientation="horizontal"
										className="bg-[#223329] h-1 opacity-60 mt-1"
									/>
									<p className="text-[#2E7B4E]">
										participou da{' '}
										<span className="font-bold">I Oficina de Programação Web</span>, que
										aconteceu na cidade de Tabatinga, Amazonas, Brasil, nos dias 24, 25 e
										26 de janeiro de 2025, com carga horária de 40h.
									</p>
								</div>
								<div className="inline-flex flex-row justify-between items-end w-full gap-4">
									<img src="/assinatura.png" />
									<div className="flex flex-col w-full justify-center items-center flex-1 max-w-sm">
										<Separator
											orientation="horizontal"
											className="bg-[#223329] h-0.5"
										/>
										<p className="text-[#2E7B4E]">Assinatura do participante</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
