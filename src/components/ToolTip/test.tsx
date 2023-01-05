import { fireEvent, waitFor, screen, getByLabelText } from '@testing-library/react'
import { renderWithTheme } from '../../utils/helpers'

import { Lock } from 'styled-icons/material'

import ToolTip from '.'

describe('<ToolTip />', () => {
  it('should render the tooltip with its children', async () => {
    const container = renderWithTheme(
      <ToolTip value="I'm the tooltip" direction="right" aria-label="tooltip">
        <Lock data-testid="icon" />
      </ToolTip>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()

    const onHoverEvent = new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true,
    })
    // all the methods below are in hover mode
    // it should render the element with a tooltip on the right
    fireEvent(screen.getByLabelText('tooltip'), onHoverEvent)

    await waitFor(() => screen.getByLabelText('tooltip'))

    expect(screen.getByLabelText('tooltip')).toHaveStyleRule(
      'border-right-color',
      '#2E2F42',
      {
        modifier: '::after'
      }
    )
    // it should render the element with a tooltip on the left
    // it should render the element with a tooltip on the top
    // it should render the element with a tooltip on the bottom
  })
})
