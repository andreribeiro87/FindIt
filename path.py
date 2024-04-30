import heapq


class Node:
    def __init__(self, position, parent=None):
        self.position = position
        self.parent = parent
        self.g = 0
        self.h = 0
        self.f = 0

    def __eq__(self, other):
        return self.position == other.position

    def __lt__(self, other):
        return self.f < other.f


def astar(start, goal):
    open_list = []
    closed_list = []

    heapq.heappush(open_list, start)

    while open_list:
        current_node = heapq.heappop(open_list)
        closed_list.append(current_node)

        if current_node == goal:
            path = []
            while current_node is not None:
                path.append(current_node.position)
                current_node = current_node.parent
            return path[::-1]  # Return reversed path

        children = []
        # Generate children nodes here (neighbors)

        for new_position in [(0, 1), (0, -1), (1, 0), (-1, 0)]:  # Adjacent squares
            node_position = (
                current_node.position[0] + new_position[0],
                current_node.position[1] + new_position[1],
            )

            # Make sure within range
            if (
                node_position[0] > (len(grid) - 1)
                or node_position[0] < 0
                or node_position[1] > (len(grid[len(grid) - 1]) - 1)
                or node_position[1] < 0
            ):
                continue

            # Make sure walkable terrain
            if grid[node_position[0]][node_position[1]] == 1:
                continue

            new_node = Node(node_position, current_node)
            children.append(new_node)

        for child in children:
            if child in closed_list:
                continue

            child.g = current_node.g + 1
            child.h = ((child.position[0] - goal.position[0]) ** 2) + (
                (child.position[1] - goal.position[1]) ** 2
            )
            child.f = child.g + child.h

            if any(
                child == open_node and child.g > open_node.g for open_node in open_list
            ):
                continue

            heapq.heappush(open_list, child)


# Exemplo de uso
start = Node((0, 0))
goal = Node((5, 5))
grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
]
path = astar(start, goal)
print(path)
