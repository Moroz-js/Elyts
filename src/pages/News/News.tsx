import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Preloader from "../../components/utils/Preloader";
import style from "./news.module.scss";
import NewsBlock from "../../components/blocks/NewsBlock";
type NewsResponse = {
	status: string;
	totalResults: number;
	articles: article[];
};
export type article = {
	sourse: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

const News: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<NewsResponse>({
		status: "",
		totalResults: 0,
		articles: [],
	});
	useEffect(() => {
		axios
			.get<NewsResponse>(
				"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8450b906e157474a821c3017292ad633"
			)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const news = data.articles.map((article, key) => {
		return <NewsBlock key={key} {...article} />;
	});

	return (
		<>
			<div className={style.news_wrapper}>
				<h1>Новости</h1>

				{loading === true ? (
					<Preloader />
				) : (
					<>
						<div className={style.news_header}>
							Всего новостей: {data.totalResults}
						</div>
						<div className={style.news_item_wrapper}>{news}</div>
					</>
				)}
			</div>
		</>
	);
};

export default News;
