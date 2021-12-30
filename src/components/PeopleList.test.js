import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PeopleList} from './PeopleList';

export const fakePeople = [{
    id: '123',
    name: 'Eva Heyes',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-11.jpg`,
    age: 44,
    bio: 'I like aventures',
    BirthDay: 'March 3',
    interest: ['Traveling', ' Languages', ' Meeting People'],
},{
    id: '456',
    name: 'Elizabeth Taylor',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-67.jpg`,
    age: 32,
    bio: 'I like Desing',
    BirthDay: 'August 7',
    interest: ['Dance', ' Sexting', ' Desing'],
},{
    id: '789',
    name: 'Lisbeth Adams',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-10.jpg`,
    age: 25,
    bio: 'I like Food',
    BirthDay: 'August 27',
    interest: ['Events', ' Cars', ' Rolex'],
}]

test('Renders as many list items as people', () => {
    render(<PeopleList people={fakePeople}/>)
    expect(screen.getAllByRole('listitem')).toHaveLength(fakePeople.length)
});

test('Does not render an "add" button if the "allowAdditions" prop is not specified', () => {
    render(<PeopleList people={fakePeople} allowAdditions={false} />)
    expect(screen.queryByText('add', {exact: false})).not.toBeInTheDocument();
});

test('Renders an "add" button if the "allowAdditions" prop is set to true', () => {
    render(<PeopleList people={fakePeople} allowAdditions />)
    expect(screen.getByText('add', {exact: false})).toBeInTheDocument();
});

test('Sends the user to the new friend page route when the add new friend button in clicked', () => {
    const fakeHistory = createMemoryHistory();
    
    render(
        <Router histoty={fakeHistory}>
            <PeopleList people={fakePeople} allowAdditions />
        </Router>
    );
    fireEvent.click(screen.getByText('add', {exact: false}))
    expect(fakeHistory.location.pathname).toEqual('/new-friend');
});

