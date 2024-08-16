import Sender, {defaultSender} from '@/types/senders/Sender'
import Filter from '@/types/app/Filter'
import Category from "@/types/categories/Category";

export default interface SendersFilter extends Filter{
	content: {
		sender: Sender
		category?: Category
	}
}

export const defaultSendersFilter = (): SendersFilter => {
	return {
		context: {},
		content: {
			sender: defaultSender()
		},
	}
}