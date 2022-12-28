import * as S from './styles'

export type ProfilePhotoProps = {
  title: string
  img: string
  size: 'normal' | 'large'
}

const ProfilePhoto = ({ title, img, size = 'normal' }: ProfilePhotoProps) => (
  <S.Wrapper>
    <S.ImageBox size={size}>
      <S.Image src={img} alt="a circle with a user's profile image" />
    </S.ImageBox>
    {(!!title && size !== 'normal') ? <S.Title>{title}</S.Title> : null}
  </S.Wrapper>
)

export default ProfilePhoto
