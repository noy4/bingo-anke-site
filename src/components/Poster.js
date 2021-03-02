import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import backgroundSlide from '../const/backgroundSlide'
import purposeSlide from '../const/purposeSlide'
import bingoAnkeSlide from '../const/bingoAnkeSlide'
import experimentSlide from '../const/experimentSlide'
import resultSlide from '../const/resultSlide'
import conclusionSlide from '../const/conclusion'

const slides = [
  backgroundSlide,
  purposeSlide,
  bingoAnkeSlide,
  experimentSlide,
  resultSlide,
  conclusionSlide,
]

function MyCard({ title, texts, imageUrl }) {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        {imageUrl ? (
          <img src={useBaseUrl(imageUrl)} />
        ) : (
          <>
            <h2 style={{ marginBottom: '1.5rem' }}>{title}</h2>
            <div style={{ marginLeft: '1.5rem' }}>
              {texts &&
                texts.length > 0 &&
                texts.map((text, idx) => <p key={idx}>{text}</p>)}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

function makeCards(items) {
  return items.map((props, idx) => {
    if (props.cols) {
      const { left, right } = props.cols
      const cols = (
        <div className="row" key={idx}>
          <div className="col">{makeCards(left)}</div>
          <div className="col">{makeCards(right)}</div>
        </div>
      )
      return cols
    }
    return <MyCard key={idx} {...props} />
  })
}

function Poster() {
  const [open, setOpen] = useState(false)
  const [slideIdx, setSlideIdx] = useState(0)

  // Does an event match the key we're watching?
  const onRight = (event) => 'arrowright' == event.key.toLowerCase()
  const onLeft = (event) => 'arrowleft' == event.key.toLowerCase()

  // Event handlers
  const onDown = (event) => {
    if (onRight(event)) {
      const idx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1
      setSlideIdx(idx)
    }
    if (onLeft(event)) {
      const idx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1
      setSlideIdx(idx)
    }
  }

  // Bind and unbind events
  useEffect(() => {
    window.addEventListener('keydown', onDown)
    return () => {
      window.removeEventListener('keydown', onDown)
    }
  }, [slideIdx])

  const slideImages = {
    left: ['1_background.png', '2_purpose.png', '3_bingo_anke.png'],
    right: ['4_experiment.png', '5_result.png', '6_conclusion.png'],
  }
  function openModal(idx) {
    setOpen(true)
    setSlideIdx(idx)
  }

  function makePreviewCards(items, right = false) {
    const offset = right ? 3 : 0
    return items.map((path, idx) => (
      <Button
        key={idx}
        className="card shadow--tl"
        style={{ margin: '1rem', padding: 0, borderRadius: '2px' }}
        onClick={() => openModal(idx + offset)}
      >
        <img src={useBaseUrl('img/slides/' + path)} />
      </Button>
    ))
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <div style={{ background: 'radial-gradient(#f8bbd0, #f48fb1)' }}>
          <DialogTitle disableTypography>
            <h1 style={{ margin: 0 }}>{slides[slideIdx].title}</h1>
          </DialogTitle>
          <DialogContent>{makeCards(slides[slideIdx].cards)}</DialogContent>
        </div>
      </Dialog>
      <div
        className="row"
        style={{ margin: '2rem 10%', justifyContent: 'center' }}
      >
        <div style={{ width: '30%' }}>{makePreviewCards(slideImages.left)}</div>
        <div style={{ width: '30%', alignSelf: 'center', margin: '0 5%' }}>
          <div className="card shadow--tl" style={{ borderRadius: '5px' }}>
            <img src={useBaseUrl('img/slides/center.png')} />
          </div>
        </div>
        <div style={{ width: '30%' }}>
          {makePreviewCards(slideImages.right, 'right')}
        </div>
      </div>
    </div>
  )
}

export default Poster
