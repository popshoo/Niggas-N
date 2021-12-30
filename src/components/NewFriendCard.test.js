import { fireEvent, render, screen } from "@testing-library/react";
import {NewFriendCard} from './NewFriendCard';

test('It call its onClick prop with no args when the component is clicked', () => {
    const onClickMock = jest.fn();
    render(<NewFriendCard onClick={onClickMock}/>);

    fireEvent.click(screen.getByRole('listitem'));
    expect(onClickMock).toHaveBeenLastCalledWith();
});