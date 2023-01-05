import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/helpers'

import ProfilePhoto from '.'

const props = {
  title: 'Mucalol',
  img: 'https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220',
}

describe('<ProfilePhoto />', () => {
  it('should render the profilePhoto without a heading', () => {
    const container = renderWithTheme(<ProfilePhoto title={props.title} img={props.img} size='normal'/>)
    
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      props.img
    )

    expect(container.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('should render the profilePhoto with a title when in large mode', () => {
    renderWithTheme(<ProfilePhoto title={props.title} img={props.img} size='large'/>)
    
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

  })
})
