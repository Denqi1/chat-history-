type Messages = {
	messages: Message[];
};

type Message = {
	_id: string;
	text: string;
	user: User;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
};

type User = {
	email: string;
	name: string;
};

export type {Messages};
