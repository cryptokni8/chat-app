import messages from './messages'
import { SEND_MESSAGE } from '../constants/ActionTypes'

describe('Messages reducer', () => {
    it('should return empty as initial state', () => {
        expect(messages(undefined, {})).toEqual([]);
    });

    it('should handle action SEND_MESSAGE and store all the messages', () => {
        expect(messages([], {
            type: SEND_MESSAGE,
            message: 'Hello',
            author: 'Me'
        })).toEqual([
            {
                message: 'Hello',
                author: 'Me'
            }
        ]);

        expect(messages([{
            message: 'Hello',
            author: 'Me'
        }], {
            type: SEND_MESSAGE,
            message: 'World',
            author: 'Me'
        })).toEqual([
            {
                message: 'Hello',
                author: 'Me'
            },
            {
                message: 'World',
                author: 'Me'
            }
        ]);
    })
});
