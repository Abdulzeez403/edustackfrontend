import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface IProps {
    cardTitle?: string
    cardDescription?: string
    cardContent: string
    cardFooter: string
    icon: React.ReactNode
    className: any
    cardStyle?: any
}


export default function CardComponent({ cardTitle, cardDescription, cardContent, cardFooter, icon, className, cardStyle }: IProps) {
    return (
        <Card className={`flex mr-10 justify-center items-center px-20 py-10  ${cardStyle}`}>

            <div className={`mr-8  ${className}`}>
                {icon}
            </div>
            <div>
                {/* <CardContent className="font-bold">
                    {cardContent}
                </CardContent>
                <CardFooter>
                    {cardFooter}
                </CardFooter> */}
                <h4 className="font-bold text-[1.5rem]" >{cardFooter}</h4>
                <p className="text-center">{cardContent}</p>

            </div>

        </Card>

    )
}