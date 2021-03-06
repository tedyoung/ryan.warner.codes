import React from 'react'

import * as S from './styles'
import { Article, Footer, Width } from 'components'

export default ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <>
      <Width>
        <S.ArticlesComponent>
          <S.Title>Articles</S.Title>
          <ul>
            {articles.map(({ node: article }) =>
              <li key={article.id}>
                <Article {...article} />
              </li>
            )}
          </ul>
        </S.ArticlesComponent>
      </Width>
      <Footer />
    </>
  )
}
