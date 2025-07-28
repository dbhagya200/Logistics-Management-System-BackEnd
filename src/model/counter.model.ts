import mongoose from 'mongoose';

interface ICounter extends mongoose.Document {
    _id: string;
    seq: number;
}

const CounterSchema = new mongoose.Schema<ICounter>({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const Counter = mongoose.model<ICounter>('Counter', CounterSchema);
export default Counter;