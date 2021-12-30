import { fireEvent, render, screen } from '@testing-library/react';
import {PersonCard} from './PersonCard';

const fakePerson = {
    id: '007',
    name: "Robert Montenegro",
    profilePicUrl: `${process.env.PUBLIC_URL}/capitan-america.png`,
    age: 100,
    bio: 'I like to program, I also like food',
    BirthDay: 'MAY 5',
    interest: ['Programming',' Data Science', ' Garding', ' Foreign Languages']
}

test('Display the person\'s name, age, and rofile pic', () => {

    render(<PersonCard person={fakePerson} />)

    expect(screen.getByText(fakePerson.name)).toBeInTheDocument();
    expect(screen.getByText(fakePerson.age)).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', fakePerson.profilePicUrl);
});

test('Display a button for the specified actioname prop', () => {
    render(<PersonCard person={fakePerson} actionName="Do Something" onAction={() => {}}/>)
    expect(screen.getByRole('img')).toHaveAttribute('src', fakePerson.profilePicUrl);
})

test('Calls the specified onAction funtion with no argument when the ction button is clicked', () => {
    const mockCallback = jest.fn();
    render(<PersonCard person={fakePerson} actionName="Click Me!" onAction={mockCallback}/>)

    fireEvent.click(screen.getByText('Click Me!'));

    expect(mockCallaback).toHaveBeenCalledWith(fakePerson.id);
})

test('calls the specified onCardClicked funtion with the person\'s id when the container is clicked', () => {
    const mockCallback = jest.fn();
    render(<PersonCard person={fakePerson} actionName="Hi I'm a button" onCardClicked={mockCallback} />)

    fireEvent.click(screen.getByRole('listitem'));
    expect(mockCallback).toHaveBeenCalledWith(fakePerson.id);
})

test('Doesn\'t display any button ifo actionName or onAction callBack are specified', () => {
    render(<PersonCard person={fakePerson} actionName="Don't display me!" />);
    expect(screen.queryByText('Don\'t display me!')).not.toBeInTheDocument();

    render(<PersonCard person={fakePerson} onAction={() => {}} />);
    expect(screen.queryByText('Don\'t display me!')).not.toBeInTheDocument();
});