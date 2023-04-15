import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { statusFilter } from "../../redux/filterSlice";
import { useSelector } from "react-redux";

export const Comments = () => {
  const filter = useSelector(statusFilter);
  const { data: comments } = useGetCommentsQuery();

  const filteredComments = () => {
    return comments.filter((comment) =>
      comment.content.toLowerCase().includes(filter.toLowerCase())
    );
  };

  if (!comments) {
    return;
  }
  return (
    <Grid>
      {comments &&
        filteredComments().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
