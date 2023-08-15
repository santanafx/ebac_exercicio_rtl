import { fireEvent, render, screen } from '@testing-library/react'
import Post from '.'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  test('Deve adicionar comentário na lista', () => {
    render(<PostComment />)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'comentário adicionado 1'
      }
    })
    fireEvent.click(screen.getByTestId('botao-comentario'))

    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'comentário adicionado 2'
      }
    })
    fireEvent.click(screen.getByTestId('botao-comentario'))

    expect(screen.getByText('comentário adicionado 1')).toBeInTheDocument()
    expect(screen.getByText('comentário adicionado 2')).toBeInTheDocument()
  })
})
