import PaginatedList from '@/types/app/PaginatedList'
import Sender from '@/types/senders/Sender'
import SendersFilter from '@/types/senders/SendersFilter'

export default interface SendersStore{
	is_restored: boolean
	filter: SendersFilter
	getSenderSuggestions: () =>  Promise<Sender[]>
	filterSenders: () => Promise<PaginatedList<Sender>>
	getSender: (sender: Sender) => Promise<Sender>
	refuseSender: (sender: Sender) => Promise<Sender>
	allowSender: (sender: Sender) => Promise<Sender>
}
