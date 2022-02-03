import React, { useState, useEffect } from 'react';
import "./App.css"

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await fetch('https://shops.puoti.dev/companies')
				.then(response => response.json()).then(response => setData(response));
		}
		fetchData();
	}, []);

	return (
		<main>
			<div className="container">
				<h1>Suomalaiset verkkokaupat</h1>
				<p>Alati kasvava lista aktiivisista luotettavista suomalaisista verkkokaupoista. Tue kotimaisia yrityksiä ja lähituotantoa, osta suomalaiselta.</p>
			</div>

			<ul id="companies">
				{data.map(item => (
					<li key={item.id}>
						<div className="title">
							<a href={item.link}>{item.name}</a>
						</div>
						<div className="description">
							<span>{item.description}</span>
						</div>
						{(item.areaName || item.company) &&
							<div className="area">
								<small>
									{item.areaName &&
										<span>{item.areaName}</span>
									}
									{item.company &&
										<span>{item.company}</span>
									}
								</small>
							</div>
						}
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
