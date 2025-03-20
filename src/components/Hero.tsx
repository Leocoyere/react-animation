import TextPressure from "../reactbits/TextPressure"

export const Hero = () => {
    return (
        <div className="mb-20">
            <TextPressure
                text="Welcome to the Lab!"
                fontFamily="Compressa VF"
                fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
                width={true}
                weight={true}
                textColor="#000"
                strokeColor="#000"
            />
        </div>
    )
}