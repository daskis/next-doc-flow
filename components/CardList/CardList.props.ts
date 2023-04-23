import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {CardItemProps} from "@/components/CardItem/CardItem.props";

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    posts: CardItemProps[]
}